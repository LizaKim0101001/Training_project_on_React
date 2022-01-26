import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/copyright/copyright";
import { StyleSection } from "./style";

function Footer() {
  return (
    <StyleSection as="footer">
      <Logo />
      <Copyright />
    </StyleSection>
  );
}

export default Footer;
