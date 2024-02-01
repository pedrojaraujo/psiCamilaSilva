"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@/components/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Props, CardData } from "@/types/types";
import { cardData } from "@/db/data";

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
      {cardData.map((card: CardData) => (
        <SwiperSlide key={card.id}>
          <Card
            className="
              overflow-hidden
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
              src={`${card.imageSrc}`}
              width={card.width}
              height={card.height}
              alt={`${card.altText}`}
              className="w-full mb-[60%]"
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
