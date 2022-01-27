import React, { useState } from "react";
import BuyCard from "../../ui/buy-card/buy-card";
import CheckboxList from "/src/components/ui/chekbox-list/chekbox-list";
import Popup from "/src/components/blocks/pop-up/pop-up";
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

  const [adress, setAdress] = useState("");
  const isButtonEnable = adress;
  const [isShow, setIsShow] = useState(false);

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
            <StyledButton
              onClick={() => setIsShow(true)}
              disabled={!isButtonEnable}
            >
              {" "}
              Купить
            </StyledButton>
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
        <Popup
          fullPrice={FullPrice}
          adress={adress}
          isShow={isShow}
          onClose={() => setIsShow(false)}
          selectProducts={selectProducts}
        />
      </StyledSection>
    </>
  ) : (
    "Продукты были слишком вкусные и их разобрали"
  );
}
