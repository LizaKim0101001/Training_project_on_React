import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyleSection } from "./style";

function Header({pageUrl}) {
  return (
    <StyleSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl}/>
    </StyleSection>
  );
}

export default Header;
