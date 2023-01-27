import React from 'react'

interface CarouselItemProps{
  titleOne:string,
  titleTwo:string,
  text:string,
  image:string
}

const CarouselItem = (props:CarouselItemProps) => {
  return (
    <>
      <img src="images/carousel/Rectangle 156.png" alt="background" className="background-image" />
        <div className="carousel-content">
          <div className="item-caption">
            <h3 className="carousel-title">{props.titleOne} <br />{props.titleTwo}</h3>
            <p className="carousel-text">
              {props.text}
            </p>
          </div>
          <img className="carousel-image" src={props.image} alt="slide" />
        </div>
    </>
  )
}

export default CarouselItem