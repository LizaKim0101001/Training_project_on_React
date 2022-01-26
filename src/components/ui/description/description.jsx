import React from "react";
import { Text, Price } from "./styled";

export default function Description({ text, price }) {
  return (
    <>
      <div>
        <Text> {text}</Text>
        <Price>{price}руб. / 700гр. </Price>
      </div>
    </>
  );
}
