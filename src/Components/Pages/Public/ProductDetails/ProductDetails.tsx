import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductAxios from "../../../../axios/ProductAxios";
import AddProductButtons from "./AddProductButtons";
import { motion, AnimatePresence } from "framer-motion";

//*-----MUI Icons------
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

//*-----Components------
import MemoryVariantButton from "./MemoryVariantButton/MemoryVariantButton";
import MainCharacteristicsList from "./MainCharacteristicsList/MainCharacteristicsList";
import AboutProductContainer from "./AboutProductContainer/AboutProductContainer";
import ZoomModal from "./ZoomModal/ZoomModal";
import Reviews from "./Reviews/Reviews";

const ProductDetails = () => {
  const params = useParams();
  const { product, error, loading, getProduct } = ProductAxios();
  const [amount, setAmount] = useState<number>(1);
  const [variantPrice, setVariantPrice] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(true);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [direction, setDirection] = useState(0);

  // * -----------Scroll to reviews--------------
  const reviewsClickHandler = () => {
    window.scrollTo(0, 900);
    setToggle(false);
  };

  //* ------------Increment/decrement amount--------------
  const incrementAmount = () => {
    setAmount((prev) => {
      return prev + 1;
    });
  };

  const decrementAmount = () => {
    if (amount > 1) {
      setAmount((prev) => {
        return prev - 1;
      });
    }
  };

  //*-------------------Swipe images-----------------------
  const showNextImage = () => {
    setDirection(1);
    const index = images.indexOf(currentImage);
    if (index === images.length - 1) {
      setCurrentImage(images[0]);
    } else {
      setCurrentImage(images[index + 1]);
    }
  };

  const showPrevImage = () => {
    setDirection(-1);
    const index = images.indexOf(currentImage);
    if (index === 0) {
      setCurrentImage(images[images.length - 1]);
    } else {
      setCurrentImage(images[index - 1]);
    }
  };

  useEffect(() => {
    getProduct(params.name);
  }, [params]);

  useEffect(() => {
    if (product && Object.keys(product).length !== 0) {
      setImages(
        product.assets.map((el: any) => {
          return el.url;
        })
      );
    }
  }, [product]);

  

  useEffect(() => {
    images.length > 0 && setCurrentImage(images[0]);
  }, [images]);

  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 200 : -200,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
    animate: {
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -200 : 200,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  return (
    <div className="product-details">
      {toggleModal && (
        <ZoomModal
          setToggleModal={setToggleModal}
          toggleModal={toggleModal}
          image={currentImage}
          showNextImage={showNextImage}
          showPrevImage={showPrevImage}
          direction={direction}
        />
      )}
      {product && Object.keys(product).length !== 0 && (
        <>
          <div className="details-main">
            <div className="details-images">
              <div className="main-image">
                <button className="switch-button privious-image-button" onClick={showPrevImage}>
                  {" "}
                  &lt;{" "}
                </button>
                <motion.img
                  variants={variants}
                  animate="animate"
                  initial="initial"
                  exit="exit"
                  src={currentImage}
                  custom={direction}
                  onClick={() => {
                    setToggleModal(true);
                  }}
                  key={currentImage}
                />
                <ZoomInOutlinedIcon
                  onClick={() => {
                    setToggleModal(true);
                  }}
                />
                <button className="switch-button next-image-button" onClick={showNextImage}>
                  {" "}
                  &gt;{" "}
                </button>
              </div>
              <div className="all-images">
                {product && product.assets.map((el: any) => (
                  <img
                    key={el.id}
                    src={el.url}
                    className={`${
                      el.url === currentImage ? "galery-image selected" : "galery-image"
                    }`}
                    onClick={() => {
                      setCurrentImage(el.url);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="details-main-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <p className="product-price">{product.price.raw + variantPrice} AZN</p>
                <AddProductButtons id={product.id} quantity={amount} />
              </div>
              <div className="product-rating">
                <div className="stars">
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarHalfOutlinedIcon />
                </div>
                <div className="rating-votes">
                  <span className="rates-count">(226)</span>
                  <span className="reviews" onClick={reviewsClickHandler}>
                    57 rəy
                  </span>
                </div>
              </div>
              {product?.variant_groups?.length > 0 && (
                <div className="product-variants">
                  <div className="product-memory">
                    <span>Yaddaş:</span>
                    <div className="memory-buttons">
                      {product.variant_groups[0].options.map((variant: any) => {
                        return (
                          <MemoryVariantButton
                            key={variant.id}
                            name={variant.name}
                            amount={variant.price.raw}
                            setVariantPrice={setVariantPrice}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              <div className="product-amount">
                <button className="amount-decrement" onClick={decrementAmount}>
                  -
                </button>
                <span className="amount">{amount}</span>
                <button className="amount-increment" onClick={incrementAmount}>
                  +
                </button>
              </div>
              <div className="add-product">
                <AddProductButtons id={product.id} quantity={amount} />
              </div>
            </div>
          </div>
          <div className="product-options">
            <AboutProductContainer additionalClass="main" />
            <div className="features-title">
              <div className="feature-tab">
                <input
                  type="checkbox"
                  id="tech-features"
                  checked={toggle}
                  onChange={() => {
                    setToggle(true);
                  }}
                />
                <label htmlFor="tech-features">Texniki Xüsusiyyətləri</label>
              </div>
              <div className="feature-tab">
                <input
                  type="checkbox"
                  id="reviews"
                  checked={!toggle}
                  onChange={() => {
                    setToggle(false);
                  }}
                />
                <label htmlFor="reviews">Rəylər</label>
              </div>
            </div>
            {toggle ? (
              <div className="technologies-info">
                <div className="main-characteristics">
                  <MainCharacteristicsList
                    text={product.name.split(" ")[0]}
                    title="Əsas göstəricilər"
                  />
                  <MainCharacteristicsList
                    text={product.name.split(" ")[0]}
                    title="Əsas göstəricilər"
                  />
                  <MainCharacteristicsList text={product.name.split(" ")[0]} title="Üstünlüklər" />
                </div>
                <AboutProductContainer />
              </div>
            ) : (
              <Reviews />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
