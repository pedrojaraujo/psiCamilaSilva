"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/Card";
import "./carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ className }: Props) => {
  return (
    <Swiper
      id="carousel__swiper"
      className={`${className}`}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="w-[306px] h-[486px]">Card</Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
