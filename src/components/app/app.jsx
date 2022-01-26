import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import product from "/src/mocks/product";
import { GlobalStyle } from "./styles";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} product={product}>
        Контент страницы
      </PageWrapper>
      ;
    </>
  );
}
