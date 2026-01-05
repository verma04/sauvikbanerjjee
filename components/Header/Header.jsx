import { Center } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NextLink } from "../../NextLink/NextLink";

import Hamburger from "./Hamburger";

const Header = ({}) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.

    setState({ clicked: false, menuName: "Menu" });
  }, []);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <Center
          zIndex={1400}
          background="linear-gradient( #000000 30% , rgba(0, 0, 0, 0) 100%);"
          className="wrapper"
        >
          <div className="inner-header">
            <Center
              position={"relative"}
              w={["40%", "540%", "20%", "20%"]}
              height="10ch"
              alignItems={"center"}
              mt="2rem"
              zIndex={10}
            >
              <NextLink href="/">
                <Image
                  alt="Logo"
                  src={"/logo.png"}
                  priority
                  fill
                  style={{ objectFit: "contain", paddingBottom: "2rem" }}
                />
              </NextLink>
            </Center>

            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName === "Menu" ? (
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="7"
                      y="13"
                      width="40"
                      height="3"
                      rx="1.5"
                      fill="white"
                    />
                    <rect
                      x="27"
                      y="26"
                      width="20"
                      height="3"
                      rx="1.5"
                      fill="white"
                    />
                    <rect
                      x="17"
                      y="39"
                      width="30"
                      height="3"
                      rx="1.5"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="24.5" stroke="white" />
                    <rect
                      x="17.8506"
                      y="16.8496"
                      width="22.5614"
                      height="1.6921"
                      rx="0.846052"
                      transform="rotate(45 17.8506 16.8496)"
                      fill="#D9D9D9"
                    />
                    <rect
                      x="16.7227"
                      y="32.6426"
                      width="22.5614"
                      height="1.6921"
                      rx="0.846052"
                      transform="rotate(-45 16.7227 32.6426)"
                      fill="#D9D9D9"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Center>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
