// /** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import Page from "../components/Page";
import { Chapter } from "../graphql/generated";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
// import "./reader_swiper.css";
// import { css } from "@emotion/react";

SwiperCore.use([Navigation, Pagination]);

const Reader = (chapter: Chapter) => {
  const { chapterName, pages } = chapter;
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  const SwiperParams = {
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      980: { slidesPerView: 2, slidesPerGroup: 2 },
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    pagination: true,
    draggable: false,
  };

  return (
    <div className="Row block py-[1.5vh] px-0 md:py-[3vh] md:px-0">
        <h3 className="mb-4 py-0 px-[4%] text-[1rem] leading-[1.25vw] text-left inline-block md:text-[18px] xl:text-[1.2vw]">
          <span>{chapterName}</span>
        </h3>
      <div className="relative">
        <div
          className="group absolute top-0 flex items-center justify-center text-[#f2f2f2] w-[4%] h-[100%] bg-[#101011] bg-opacity-30 z-10 left-0 rounded-r-[5px]"
          ref={navigationPrevRef}
        >
          <MdChevronLeft className="group-hover:opacity-100 opacity-0" size="3em" style={{ color: "white" }} />
        </div>
        <div
          className="group absolute top-0 flex items-center justify-center text-[#f2f2f2] w-[4%] h-[100%] bg-[#101011] bg-opacity-30 z-10 right-0 rounded-l-[5px]"
          ref={navigationNextRef}
        >
          <MdChevronRight className="group-hover:opacity-100 opacity-0" size="3em" style={{ color: "white" }} />
        </div>
        <Swiper
          {...SwiperParams}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.prevEl = navigationPrevRef.current
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              // eslint-disable-next-line no-param-reassign
              swiper.params.navigation.nextEl = navigationNextRef.current
    
              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
        >
          {pages &&
            pages.map((page) => (
              <SwiperSlide className="inline-flex scale-1 " key={page.pageId}>
                {/* <div className="text-black-100">page.thumbnail</div> */}
                <Page
                key={page.pageId}
                {...page}
              />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
   
  );
};
export default Reader;
