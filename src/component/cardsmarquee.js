import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./cardsmarquee.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import StarRating from "./starrating";
import data from "./dummyapi.json"; // Import the JSON data

export default function Swipercard() {
  const [slides, setSlides] = useState(data.bettingAppReviews); // Access the data using the correct key

  return (
    <>
      <Swiper
        spaceBetween={50}
        freeMode={true}
        autoplay={{ delay: 2000 }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is <= 768px
          768: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 6,
            autoplay: { delay: 4000 },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <p className="slide-description">{slide.comment}</p>
            <p className="slide-name">
              <b>{slide.reviewer_name}</b>
            </p>
            <div className="slide-rating">
              <StarRating rating={slide.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
