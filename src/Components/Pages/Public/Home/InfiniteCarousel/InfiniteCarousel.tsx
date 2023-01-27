import React from "react";
import SlidesBox from "./SlidesBox/SlidesBox";

const InfiniteCarousel = () => {

  return (
    <div id="infinite-carousel">
      <div className="slider">
        <div className="slide-track">
         <SlidesBox/>
         <SlidesBox/>
         <SlidesBox/>
         <SlidesBox/>
         <SlidesBox/>
         <SlidesBox/>
         <SlidesBox/>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
