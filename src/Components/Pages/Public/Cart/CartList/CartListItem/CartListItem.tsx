import QuantityButton from "./QuantityButton/QuantityButton";
import RemoveButton from "./RemoveButton/RemoveButton";
import { useState } from "react";
import { loadingSpinner } from "../../../../../Utils/Loading/Loading";
interface CartListItemProps {
  image: string;
  name: string;
  quantity: number;
  price: string;
  itemId: string;
}

const CartListItem = (props: CartListItemProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <li className="cart-list-item">
      <div className="cart-item-image">
        <img src={props.image} />
        <div className="cart-item-summary">
          <div className="cart-item-name">{props.name}</div>
          <div className="cart-item-info">
            <div className="cart-item-variant"></div>
            <div className="cart-item-price">{props.price}</div>
          </div>
        </div>
      </div>
      <div className="cart-item-quantity-container">
        <QuantityButton
          symbol="-"
          loading={loading}
          setLoading={setLoading}
          increase={false}
          itemId={props.itemId}
          quantity={props.quantity}
        />
        <span className="cart-item-quantity">{loading ? loadingSpinner : props.quantity}</span>
        <QuantityButton
          symbol="+"
          loading={loading}
          setLoading={setLoading}
          increase={true}
          itemId={props.itemId}
          quantity={props.quantity}
        />
      </div>
      <RemoveButton itemId={props.itemId} />
    </li>
  );
};

export default CartListItem;
