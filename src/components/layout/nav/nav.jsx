import React from "react";
import { AppRoute } from "/src/const";
import { Ul, Li } from "/src/styled";
import Button from "/src/components/ui/button/button";

function Nav({ pageUrl }) {
  console.log(AppRoute);

  const links = [
    { to: AppRoute.MAIN, item: <Button link={AppRoute.MAIN}>Главная</Button> },
    { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> }
  ];
  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
