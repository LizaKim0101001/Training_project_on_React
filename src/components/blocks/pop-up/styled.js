import styled from "styled-components";
import Close from "/src/assets/close.svg";
import Button from "/src/components/ui/button/button";

export const Wrapper = styled.div`
  width: 540px;
  position: fixed;
  top: 25%;
  left: 25%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 6;
  border-radius: 5px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 150%;
  padding: 0;
  margin: 0;
  padding-top: 10px;
`;

export const CloseButton = styled.button`
  width: 21px;
  height: 21px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-image: url(${Close});
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
`;
export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
