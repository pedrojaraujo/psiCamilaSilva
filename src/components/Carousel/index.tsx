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
      className={`${className} 2xl:h-[550px] xl:h-[480px] lg:h-[450px]`}
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
        <Card
          className="
          lg:w-[224px]
          lg:h-[385px]
          xl:w-[265px]
          xl:h-[445px]
          2xl:w-[306px] 
          2xl:h-[486px]
        "
        >
          Card
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          className="
          lg:w-[224px]
          lg:h-[385px]
          xl:w-[265px]
          xl:h-[445px]
          2xl:w-[306px] 
          2xl:h-[486px]
        "
        >
          Card
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          className="
          lg:w-[224px]
          lg:h-[385px]
          xl:w-[265px]
          xl:h-[445px]
          2xl:w-[306px] 
          2xl:h-[486px]
        "
        >
          Card
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          className="
          lg:w-[224px]
          lg:h-[385px]
          xl:w-[265px]
          xl:h-[445px]
          2xl:w-[306px] 
          2xl:h-[486px]
        "
        >
          Card
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card
          className="
          lg:w-[224px]
          lg:h-[385px]
          xl:w-[265px]
          xl:h-[445px]
          2xl:w-[306px] 
          2xl:h-[486px]
        "
        >
          Card
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
