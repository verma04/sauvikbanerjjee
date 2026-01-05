import { Box } from '@chakra-ui/react'
import gsap from 'gsap';
import React, { useEffect, useState, useRef } from "react"

const CostomCursor = () => {
    const cursor = useRef<null | HTMLParagraphElement>(null);
    const cursorFollower = useRef<null | HTMLParagraphElement>(null);
    React.useEffect(() => {

        var posX = 0,
          posY = 0;
    
        var mouseX = 0,
          mouseY = 0;
    
        function moveCircle(e: any) {
          gsap.to(cursor.current, {
            x: e.clientX,
            y: e.clientY
          }).duration(0.3);
          gsap.to(cursorFollower.current, {
            x: e.clientX,
            y: e.clientY
          }).duration(0.7);
        }
        window.addEventListener('mousemove', moveCircle);
      }, []);
  return (
    <>
    
    <Box ref={cursor}></Box>
    <Box ref={cursorFollower}></Box>
    </>
  )
}

export default CostomCursor;