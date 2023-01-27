import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate } from "react-router-dom";
interface Product {
  name: string;
  price: number;
  img: string;
  clear:any
}

const ProductItem = (props: Product) => {

  const navigate = useNavigate()

  const onclickHandler = () =>{
    navigate(`/products/${props.name}`)
    props.clear()
  }

  return (
      <div className="product" onClick={onclickHandler}>
        <div className="image">
          <img src={props.img} alt="product image" />
        </div>
        <div className="product-info">
          <h4 className="product-name">{props.name}</h4>
          <p className="product-price">
            <span className="price-value">{props.price}</span> <FontAwesomeIcon icon="manat-sign" />
          </p>
        </div>
      </div>
  );
};

export default ProductItem;
