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
  height: 80px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 5;
`;
