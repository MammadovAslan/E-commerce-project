import React from "react";
import InfoLoading from "./InfoLoading/InfoLoading";
import MainImageLoader from "./MainImageLoader/MainImageLoader";

const DetailsLoadingHolders = () => {
  return (
    <div className="details-loading-container">
      <div className="image-loading"><MainImageLoader/></div>
      <div className="info-loading"><InfoLoading/></div>
    </div>
  );
};

export default DetailsLoadingHolders;
