import React from "react";
import logo from "../images/logo.PNG";
import ComplitionIndicator from "./ComplitionIndicator";
import "../css/common.css";

const Layout = ({
  heading,
  para,
  buttonText,
  children,
  one,
  two,
  three,
  four,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src={logo} alt="logo" id="logo" />
      {<ComplitionIndicator one={one} two={two} three={three} four={four} />}
      {heading && <h1>{heading}</h1>}
      {para && <p>{para}</p>}
      <>{children}</>
      {buttonText && <button type="submit">{buttonText}</button>}
    </div>
  );
};

export default Layout;
