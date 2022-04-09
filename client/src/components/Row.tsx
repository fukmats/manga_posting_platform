import React, { useRef } from "react";

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination]);

const Row = ( category: { [field: string]: any } ) => {
    const { categoryId, categoryName, contents } = category;
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
        // onBeforeInit={(swiper: SwiperCore) => {
        //     swiper.params.navigation.prevEl = prevRef.current;
        //     swiper.params.navigation.nextEl = nextRef.current;
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        //   }}
        >
            {contents && 
            contents.map((content) => (
                
                <SwiperSlide
                key={content.contentId}
                >
                    {content.thumbnail}
                </SwiperSlide>
            ))
            }
            <div ref={prevRef}>Prev</div>
            <div ref={nextRef}>Next</div>
        </Swiper>

    )



}

export default Row;