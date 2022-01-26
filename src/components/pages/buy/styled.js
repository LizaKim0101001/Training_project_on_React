import styled, { css } from "styled-components";
import Button from "/src/components/ui/button/button";
import Chackbox from "/src/assets/checkbox.svg";
import { Swiper } from "swiper/react";

export const StyledSection = styled.section`
  width: 100%;
  position: absolute;
  top: 80px;
  bottom: 80px;
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  padding-top: 40px;
  padding-bottom: 0;
  box-sizing: border-box;
`;

export const StyledInput = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${Chackbox});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: #f7f7f7;
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const Panel = styled.div`
  width: 353px;
  background-color: white;
  padding: 20px;
  margin-bottom: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 130%;
  font-family: "Inter";
`;

export const PriceTitle = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
`;

export const Input = styled.input`
  margin-top: 20px;
  width: 313px;
  height: 48px;
  background-color: #f7f7f7;
  box-sizing: border-box;

  &::placeholder {
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  width: 314px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  margin-left: 20px;
  margin-right: auto;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
