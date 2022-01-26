import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import { StyledSection, StyledLi, StyledUl } from "./styles";

// список преимуществ
function FeaturesList({ features }) {
  return features && features.length ? (
    <StyledSection>
      <Title>Почему фермерские продукты лучше?</Title>
      <StyledUl>
        {features.map((feature) => (
          <StyledLi className="features__item" key={feature.id}>
            <FeatureCard {...feature} />
          </StyledLi>
        ))}
      </StyledUl>
      <Button link="/order">Купить</Button>
    </StyledSection>
  ) : null;
}

export default FeaturesList;
