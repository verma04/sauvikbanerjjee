// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import { NextLink } from "../../NextLink/NextLink";
import { category } from "./Categories";
import { useForm, SubmitHandler } from "react-hook-form";
import { isIOS, isMacOs, isWindows } from "react-device-detect";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  category: String;
};
import Select from "react-dropdown-select";

function ContactForm() {
  const set = category.map((value) => ({
    value: value.head,
    label: value.head,
  }));

  const [categorys, setCategorys] = useState(null);
  const [categoryValidation, setCategoryValidation] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setCategoryValidation("");
    const fin = {
      ...data,
    };

    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fin),
    });
    reset();
    toast("Thank you for contacting us. We will be in touch with you.", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Box mt="2rem">
        <FormLabel textTransform={"uppercase"} color={"white"}>
          First name
        </FormLabel>
        <Input
          color={"white"}
          variant="flushed"
          {...register("name", { required: true })}
          placeholder="Enter your full name"
        />
        <FormErrorMessage>
          {errors.name?.type === "required" && (
            <p role="alert"> Name is required</p>
          )}
        </FormErrorMessage>
      </Box>

      <Box mt="2rem">
        <FormLabel textTransform={"uppercase"} color={"white"}>
          Email
        </FormLabel>
        <Input
          color={"white"}
          variant="flushed"
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
        <FormErrorMessage>
          {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}
        </FormErrorMessage>
      </Box>

      <Box mt="2rem">
        <FormLabel textTransform={"uppercase"} color={"white"}>
          Phone
        </FormLabel>
        <Input
          color={"white"}
          variant="flushed"
          {...register("phone", { required: true })}
          placeholder="Enter your phone"
        />
        <FormErrorMessage>
          {errors.phone?.type === "required" && (
            <p role="alert">Phone is required</p>
          )}
        </FormErrorMessage>
      </Box>

      <Button
        variant={"white"}
        mt={"2rem"}
        w="7rem"
        colorScheme="teal"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
