import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import { Main } from "./style";

// Обёртка для контента страниц
function PageWrapper({ children, features, product }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage features={features} product={product} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
