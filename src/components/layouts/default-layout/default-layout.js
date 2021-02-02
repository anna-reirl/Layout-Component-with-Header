import React from "react";
import { Header } from "../../header";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
