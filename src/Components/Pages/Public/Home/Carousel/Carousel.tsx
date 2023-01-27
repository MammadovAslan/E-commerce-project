import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem/CarouselItem";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={10000} className="carousel-item">
        <CarouselItem
          titleOne="Buy & Sell"
          titleTwo="What's now & Next"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="images/carousel/image1.svg"
        />
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <CarouselItem
          titleOne="Buy & Sell"
          titleTwo="What's now & Next"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="images/carousel/Smartwatch-PNG-Pic.png"
        />
      </Carousel.Item>

      <Carousel.Item interval={10000}>
        <CarouselItem
          titleOne="Buy & Sell"
          titleTwo="What's now & Next"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="images/carousel/laptop.png"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
