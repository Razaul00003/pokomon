import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import PocoCard from "./PocoCard";

export default function Carousel({ data, types }) {
  return (
    <div className="w-3/4 mx-auto">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div className="    mx-auto lg:hidden">
          {data?.map((poko, index) => (
            <SwiperSlide>
              <div key={index}>
                <PocoCard data={poko} power={types[index]} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
