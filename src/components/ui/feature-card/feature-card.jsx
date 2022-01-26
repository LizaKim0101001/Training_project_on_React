import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Header, Image, Owner, Text } from "./style";

function FeatureCard({
  title, 
  owner, 
  about, 
  isNegative, 
  image 
}) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}> {owner} </Owner>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;
