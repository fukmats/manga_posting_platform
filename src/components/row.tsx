import React, { useRef } from "react";

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const Row = ( content: {title:string, thumbnail:string} ) => {
    const { title, thumbnail } = content;
    const prevRef = useRef<HTMLDivElement>(null)
    const nextRef = useRef<HTMLDivElement>(null)
    const SwiperParams = {
        breakpoints: {
            0: {slidesPerView: 1, slidesPerGroup: 1},
            320: {slidesPerView: 2, slidesPerGroup: 2},
            640: {slidesPerView: 3, slidesPerGroup: 3},
            980: {slidesPerView: 4, slidesPerGroup: 4}
        },
        navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        },
        pagination: true,

    }

    return (
        <Swiper
        {...SwiperParams}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
            
            <div ref={prevRef}>Prev</div>
            <div ref={nextRef}>Next</div>
        </Swiper>

    )



}