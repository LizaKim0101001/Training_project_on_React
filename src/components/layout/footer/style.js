import styled from "styled-components";
import { Section } from "/src/styled";

export const StyleSection = styled(Section)`
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  background-color: ${(props) => props.theme.colorWhiteForText};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: 79px;
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
