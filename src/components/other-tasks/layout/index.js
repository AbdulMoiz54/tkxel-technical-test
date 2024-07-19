import React from "react";
import Header from "../../shared-components/header";
import Footer from "../../shared-components/footer";

export default function OtherTasksLayout({ children }) {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center p-[20px]">{children}</div>
      <Footer />
    </div>
  );
}
