import React from "react";
import Tabs from "../../ui/tabs/tabs";
import { WrapperContent, Image } from "./styled";
import Title, { TitleSize } from "/src/components/ui/title/title";

export default function BuyCard({ product }) {
  return (
    <>
      <WrapperContent>
        <Image src={product.image} />
        <Title size={TitleSize.MEDIUM}> {product.title} </Title>
        <Tabs product={product} />
      </WrapperContent>
    </>
  );
}
