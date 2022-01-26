import styled from "styled-components";
import { Img, P } from "/src/styled";

export const Feature = styled.article`
  width: 540px;
  min-height: 197px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => (props.isNegative ? "#F8DDD7" : "#E1EDCE")};
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: ${(props) => props.theme.indent};
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhiteForText};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.shopProductBgColor
      : props.theme.farmProductBgColor};
`;

export const Text = styled(P)`
  text-align: left;
`;
