import styled from "styled-components";

export const StyledLogo = styled.a`
  text-decoration: none;
  height: 44px;
  width: 398px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export const Text = styled.span`
  padding: 0;
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  text-decoration: none;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colorBlackForText};
`;
