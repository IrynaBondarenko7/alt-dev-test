import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const CaseSection = () => {
  return (
    <section className="pt-[89px] pb-[262px] relative" id="case-studies">
      <div className="max-w-[1247px] mx-auto flex justify-between items-center mb-[19px]">
        <h2 className="text-secondTextColour font-gilroy text-[30px] font-bold leading-[58px]">
          Don’t just take our word for it...
        </h2>
        <a
          href="#"
          className="text-black font-ibm-plex-mono text-[12px] leading-[23px] underline decoration-solid hover:text-btnTextColour focus:text-btnTextColour transition-all duration-300"
        >
          View all Case Studies
        </a>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-[1247px] h-[596px]"
      >
        <SwiperSlide className="relative rounded-[10px] shadow-customSlideShadow">
          <div className="absolute z-10 top-[85px] left-[71px]">
            <p className="text-white font-gilroy text-[33px] font-bold leading-[41px] w-[742px] mb-5">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”
            </p>
            <p className="text-white text-[12px] leading-[25px] font-ibm-plex-mono w-[237px]">
              Paul Johnson, Director Nottingham Forest Football Club
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[10px] shadow-customSlideShadow">
          <div className="absolute z-10 top-[85px] left-[71px]">
            <p className="text-white font-gilroy text-[33px] font-bold leading-[41px] w-[742px] mb-5">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”
            </p>
            <p className="text-white text-[12px] leading-[25px] font-ibm-plex-mono w-[237px]">
              Paul Johnson, Director Nottingham Forest Football Club
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[10px] shadow-customSlideShadow">
          <div className="absolute z-10 top-[85px] left-[71px]">
            <p className="text-white font-gilroy text-[33px] font-bold leading-[41px] w-[742px] mb-5">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”
            </p>
            <p className="text-white text-[12px] leading-[25px] font-ibm-plex-mono w-[237px]">
              Paul Johnson, Director Nottingham Forest Football Club
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[10px] shadow-customSlideShadow">
          <div className="absolute z-10 top-[85px] left-[71px]">
            <p className="text-white font-gilroy text-[33px] font-bold leading-[41px] w-[742px] mb-5">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”
            </p>
            <p className="text-white text-[12px] leading-[25px] font-ibm-plex-mono w-[237px]">
              Paul Johnson, Director Nottingham Forest Football Club
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-[10px] shadow-customSlideShadow">
          <div className="absolute z-10 top-[85px] left-[71px]">
            <p className="text-white font-gilroy text-[33px] font-bold leading-[41px] w-[742px] mb-5">
              “We have been delighted with our DNS partnership. The club now has
              direction & delivery on all document processes with a clear road
              map for the foreseeable future. ”
            </p>
            <p className="text-white text-[12px] leading-[25px] font-ibm-plex-mono w-[237px]">
              Paul Johnson, Director Nottingham Forest Football Club
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
