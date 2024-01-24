import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "../css/detail.css";
import "swiper/css";
import "swiper/css/navigation";

import ListCard from "../common/ListCard";
import { useParams } from "react-router-dom";

export default function Detail({ list }) {
  let { id } = useParams();
  let findId = list.find((a) => a._id === Number(id));
  return (
    <main className="Detail mw">
      <div className="DetailCon">
        <div className="imgCon">
          <img src={`/img/${findId.img}`} alt={findId.title} />
        </div>
        <div className="DetailText">
          <h2>{findId.title}</h2>
          <p>{Number(findId.price).toLocaleString()}원</p>

          <div className="cartWrap">
            <div className="countBtn">
              <span className="plus">-</span>
              <span>1</span>
              <span className="minus">+</span>
            </div>
            <div className="cartBtn">
              <span>ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>

      <div className="detailTab">
        <button>상품설명</button>
        <button>추가설명</button>
        <button>구매리뷰</button>
      </div>

      <h2>Similer Items</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="listCon mySwiper"
      >
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ListCard />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
