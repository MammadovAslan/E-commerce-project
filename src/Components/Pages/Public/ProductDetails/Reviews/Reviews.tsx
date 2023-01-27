import React from "react";
import Review from "./Review/Review";
import ReviewForm from "./ReviewForm/ReviewForm";

const Reviews = () => {
  return (
    <div className="product-reviews">
      <ul className="reviews-list">
        <Review />
        <Review />
      </ul>
      <ReviewForm />
    </div>
  );
};

export default Reviews;
