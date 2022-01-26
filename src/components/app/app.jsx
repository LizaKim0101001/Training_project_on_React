import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import product from "/src/mocks/product";
import { GlobalStyle } from "./styles";
import MainPage from "/src/components/pages/main-page/main-page";
import Buy from "/src/components/pages/buy/buy";
import { AppRoute } from "/src/const";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={features} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.ORDER}>
            <PageWrapper pageUrl={AppRoute.ORDER}>
              <Buy product={product} />
            </PageWrapper>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
