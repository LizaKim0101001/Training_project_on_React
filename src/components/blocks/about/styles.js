import styled from "styled-components";
import { P, Section } from "/src/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled(Section)`
  display: flex;
  position: relative;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  background-color: ${(props) => props.theme.aboutBgColor};
  align-items: center;
  z-index: 0;
  flex-direction: column;
  padding-left: 90px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(P)`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;
