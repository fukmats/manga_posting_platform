// /** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listContents } from '../../graphql/queries'

// Swiper
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import "./row_swiper.css";
// import { css } from "@emotion/react";

SwiperCore.use([Navigation, Pagination]);

const Row = (category) => {
  const [contents, setContents] = useState<any[]>([])

  useEffect(() => {
    fetchContents()
  }, [])

  // Query with filters, limits, and pagination
  const filter = {
    categoryName: {
    eq:category.name  // filter  = category.name
    }
  };


  async function fetchContents() {
    try {
      const categoriesData = await API.graphql({ query: listContents, variables: { filter: filter}});
      const contents = categoriesData.data.listContents.items
      setContents(contents)
    } catch (err) { 
      console.log('error fetching contents') 
      console.log(err)
    }
  }
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
    draggable: false,
  };

  return (
    <div className="Row block py-[1.5vh] px-0 md:py-[3vh] md:px-0">
        <h3 className="mb-4 py-0 px-[4%] text-[1rem] leading-[1.25vw] text-left inline-block md:text-[18px] xl:text-[1.2vw]">
          <span>{category.name}</span>
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
            // Delay execution
            setTimeout(() => {

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
          {contents &&
            contents?.map((content) => (
              <SwiperSlide className="inline-flex scale-1 " key={content.id}>
                {/* <div className="text-black-100">content.thumbnail</div> */}
                <Card
                key={content.id}
                {...content}
              />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Row;
