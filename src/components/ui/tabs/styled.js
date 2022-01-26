import styled from "styled-components";
import { P } from "/src/styled";

export const StyledButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  font-family: "Inter";
  margin-right: 8px;
  background-color: ${(props) => (props.active ? "#88AA4D" : "#f7f7f7")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

export const Wrapper = styled.div`
  width: 419px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const Content = styled(P)`
  max-width: 419px;
  font-family: "Inter";
  font-size: 14px;
  line-height: 21px;
`;

export const TitleList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 16px;
`;
