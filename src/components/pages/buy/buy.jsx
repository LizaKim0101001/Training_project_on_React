import React, { useState } from "react";
import BuyCard from "../../ui/buy-card/buy-card";
import CheckboxList from "/src/components/ui/chekbox-list/chekbox-list";
import {
  StyledSection,
  StyledInput,
  Panel,
  Input,
  PriceTitle,
  Price,
  StyledButton,
  ProductSwiper
} from "./styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function Buy({ product }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const selectProducts = selectProductIds.map((id) =>
    product.find((product) => product.id === id)
  );
  const FullPrice = selectProducts.reduce(
    (sum, product) => (sum += +product.price),
    0
  );
  const [swiperRef, setSwiperRef] = useState(null);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const [adress, setAdress] = useState(" ");

  const handleBuyClick = () => {
    console.log(`Спасибо за заказ, вы купили: \n${selectProducts.map(
      (product) => `${product.title} - ${product.price} руб.\n`
    )}
    Итого: ${FullPrice} руб.
    Доставка по адресу: ${adress}.`);
  };

  return product && product.length ? (
    <>
      <StyledSection as="form">
        <div>
          <Panel>
            <Title size={TitleSize.EXTRA_SMALL}> Выберите продукты </Title>
            <CheckboxList
              labelComponent={StyledInput}
              options={product.map((product) => ({
                value: product.id,
                text: product.title
              }))}
              selectValues={selectProductIds}
              onChange={setSelectProductIds}
              onClickLabel={handleOnClickProduct}
            />
          </Panel>
          <Panel>
            <Title size={TitleSize.EXTRA_SMALL}> Выберите продукты </Title>
            <Input
              type="text"
              placeholder="Введите адрес доставки"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
            <PriceTitle>Цена </PriceTitle>
            <Price>{FullPrice} руб.</Price>
            <StyledButton onClick={handleBuyClick}> Купить</StyledButton>
          </Panel>
        </div>
        <ProductSwiper
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          ProductSwiper
          mousewheel
          pagination={{
            type: "fraction"
          }}
        >
          {product.map((product) => (
            <SwiperSlide key={product.id}>
              <BuyCard product={product} onSwiper={setSwiperRef} />
            </SwiperSlide>
          ))}
        </ProductSwiper>
      </StyledSection>
    </>
  ) : (
    "Продукты были слишком вкусные и их разобрали"
  );
}
