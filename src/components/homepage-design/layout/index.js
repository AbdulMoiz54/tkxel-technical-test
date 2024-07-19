import React from "react";
import Header from "../../shared-components/header";
import Footer from "../../shared-components/footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
