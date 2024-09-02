import { Swiper, SwiperSlide } from "swiper/react";
import slide_right from "/slide-right.svg";
import slide_left from "/slide-left.svg";
import clock from "/Weather/clock.svg";
import wind from "/wind.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Carousel({ data }) {
  return (
    <div className="relative ">
      <button className="absolute right-0 top-[calc(50%-20px)] rounded p-1 bg-slate-700 review-swiper-button-next z-10">
        <img src={slide_right} width={12} />
      </button>
      <button className="absolute left-0 top-[calc(50%-20px)] rounded p-1 bg-slate-700 review-swiper-button-prev z-10">
        <img src={slide_left} width={12} />
      </button>
      <Swiper
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={100}
        speed={300}
        initialSlide={data.targetSlide}
        breakpoints={{
          1150: {
            spaceBetween: 200,
          },
          1024: {
            spaceBetween: 150,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation]}
        className="p-8"
      >
        {Array.from(data.temperatures.entries()).map((tempArr, i) => {
          return (
            <SwiperSlide
              className="flex gap-4 flex-col relative justify-center items-center p-4 h-64 border-slate-700 border rounded"
              key={i}
            >
              <span className="flex gap-1 items-center absolute left-3 top-3 text-slate-700">
                <img src={clock} width={15} height={15} />
                {tempArr[0]}
              </span>
              <img src={data.weather_code[i]} width={70} height={70} />
              <h2 className=" text-slate-700">{tempArr[1] + "°C"}</h2>
              <p className="flex justify-center gap-3 mt-4 text-slate-800">
                <img src={wind} width={20} height={20} />
                {data.wind_speed[i]} m/s
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
