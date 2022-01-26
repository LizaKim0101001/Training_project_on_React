import React, { useState } from "react";
import { StyledButton, Wrapper, Content, TitleList } from "./styled";
import Description from "/src/components/ui/description/description";
import Properties from "/src/components/ui/properties/properties";
import Characteristic from "/src/components/ui/characteristic/characteristic";

export default function Tabs({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: <Description text={product.description} price={product.price} />
    },
    {
      title: "Характеристики",
      content: <Characteristic characteristics={product.characteristic} />
    },
    {
      title: "Свойства",
      content: <Properties properties={product.properties} />
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <Wrapper>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <StyledButton active key={item.title}>
                  {item.title}
                </StyledButton>
              );
            }
            return (
              <StyledButton
                key={item.title}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </StyledButton>
            );
          })}
      </TitleList>
      <Content> {tabs[activeTab].content} </Content>
    </Wrapper>
  );
}
