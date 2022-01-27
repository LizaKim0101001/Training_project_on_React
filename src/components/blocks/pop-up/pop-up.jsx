import React, { useEffect } from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { Wrapper, Text, CloseButton, StyledButton } from "./styled";
import { Ul, Li } from "/src/styled";

function Popup({ fullPrice, adress, isShow, onClose, selectProducts }) {
  const handlerEsc = (evt) => {
    if (evt.keyCode === 27) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);
  return isShow ? (
    <Wrapper>
      <CloseButton onClick={onClose} />
      <Title size={TitleSize.MEDIUM}> Заказ создан успешно!</Title>
      <Text>Спасибо за заказ, вы купили:</Text>
      <Ul>
        {selectProducts.map((product) => (
          <Li>
            {product.title} - {product.price} руб.
          </Li>
        ))}
      </Ul>
      <Text>Итого: {fullPrice}.</Text>
      <Text>Доствака по адресу: {adress}</Text>
      <StyledButton onClick={onClose}>Закрыть</StyledButton>
    </Wrapper>
  ) : null;
}

export default Popup;
