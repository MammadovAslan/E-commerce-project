import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";

const Review = () => {
  return (
    <div className="review">
      <div className="review-rate">
        <h1 className="rate-number">4.5</h1>
        <div className="rate-stars">
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarOutlinedIcon />
          <StarHalfOutlinedIcon />
        </div>
      </div>
      <div className="review-content">
        <h5 className="person-fullname">Gunel Mammadova</h5>
        <span className="review-date">5 gün əvvəl</span>
        <p className="review-product-variants">Yaddaş - 64</p>
        <p className="review-comment">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, omnis mollitia laboriosam
          repudiandae nobis, nam quibusdam dolorem eos numquam vero repellendus ex doloribus eveniet
          perferendis debitis ipsa dignissimos asperiores facere.
        </p>
      </div>
    </div>
  );
};

export default Review;
