"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Carousel = ({ className }: Props) => {
  return (
    <Swiper
      className={`${className} teste`}
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
          lg:w-[170px] 
          lg:h-[335px]
          xl:w-[180px] 
          xl:h-[345px]
          2xl:w-[265px] 
          2xl:h-[445px]
          desktop-3xl:w-[306px]  
          desktop-3xl:h-[486px] 
        "
        >
          <Image
            src="/images/plant.png"
            width={200}
            height={200}
            alt="Logo escrito Camila Silva psicóloga."
            className="w-full mb-[55%]"
          />
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
