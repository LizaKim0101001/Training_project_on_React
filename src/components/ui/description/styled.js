import styled from "styled-components";
import { P } from "/src/styled";

export const Text = styled(P)`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 14px;
`;

export const Price = styled(P)`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.aboutBgColor};
  display: inline-block;
`;
