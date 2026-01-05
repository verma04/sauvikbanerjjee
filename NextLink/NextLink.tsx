import React, { ReactNode } from "react";
import NLink from "next/link";

export const NextLink = (props: any) => {
  return (
    <NLink href={props.href} passHref>
      {props.children}
    </NLink>
  );
};
