import React from "react";

interface FeatureProps{
    image:string,
    name:string,
    caption:string
}

const Feature = (props:FeatureProps) => {
  return <div className="feature">
    <div className="feature-image">
        <img src={props.image} alt="" />
    </div>
    <div className="feature-name">
        {props.name}
    </div>
    <div className="feature-caption">
        {props.caption}
    </div>
  </div>;
};

export default Feature;
