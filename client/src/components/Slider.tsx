// /** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "./Card";

// Swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./swiper_row.css"
// import { css } from "@emotion/react";

SwiperCore.use([Navigation, Pagination]);

const Slider = (category) => {
  const { categoryName, contents } = category;
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const SwiperParams = {
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      320: { slidesPerView: 2, slidesPerGroup: 2 },
      640: { slidesPerView: 3, slidesPerGroup: 3 },
      980: { slidesPerView: 4, slidesPerGroup: 4 },
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    pagination: true,
    
  };

  return (
    <div className="block py-[1.5vh] px-0 md:py-[3vh] md:px-0">
        <h3 className="mb-4 py-0 px-[4%] text-[1rem] leading-[1.25vw] text-left inline-block md:text-[18px] xl:text-[1.2vw]">
          <span>{categoryName}</span>
        </h3>
      <div className="flex relative ">
        <div
          className="absolute top-0 flex items-center justify-center text-[#f2f2f2] w-[4%] h-[100%] bg-[#101011] bg-opacity-30 z-10 left-0"
          ref={navigationPrevRef}
        >
          <MdChevronLeft size="3em" style={{ color: "white" }} />
        </div>
        <div
          className="absolute top-0 flex items-center justify-center text-[#f2f2f2] w-[4%] h-[100%] bg-[#101011] bg-opacity-30 z-10 right-0"
          ref={navigationNextRef}
        >
          <MdChevronRight size="3em" style={{ color: "white" }} />
        </div>
        <Swiper
          className=""
          {...SwiperParams}
          // css={styleSwiperWrapper}
          // onBeforeInit={(swiper: SwiperCore) => {
          //     swiper.params.navigation.prevEl = navigationPrevRef.current;
          //     swiper.params.navigation.nextEl = navigationNextRef.current;
          //     swiper.navigation.init();
          //     swiper.navigation.update();
          //   }}
        >
          {contents &&
            contents.map((content) => (
              <SwiperSlide className="inline-flex" key={content.contentId}>
                {/* <div className="text-black-100">content.thumbnail</div> */}
                <Card
                key={content.contentId}
                {...content}
              />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

// const styleSwiperWrapper = css``;
