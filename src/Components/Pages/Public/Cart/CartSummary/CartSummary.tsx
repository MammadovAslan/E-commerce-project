import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartSummary = () => {
  const { cart } = useSelector((state: any) => state.cart);
  return (
    <div className="cart-summary">
      <h6 className="summary-title">Ümumi</h6>
      {cart && (
        <ul className="summary-list">
          <li className="summary-item">
            {" "}
            <span>Məbləğ</span>{" "}
            <span className="summary-item-price">
              {cart?.subtotal?.formatted}
              <FontAwesomeIcon icon="manat-sign" />
            </span>{" "}
          </li>
          <li className="summary-item">
            {" "}
            <span>Çatdırılma</span>{" "}
            <span className="summary-item-price">
              0.00
              <FontAwesomeIcon icon="manat-sign" />
            </span>{" "}
          </li>
          <li className="summary-item">
            {" "}
            <span>Hədiyyə paketi</span>{" "}
            <span className="summary-item-price">
              0.00
              <FontAwesomeIcon icon="manat-sign" />
            </span>{" "}
          </li>
          <li className="summary-item">
            {" "}
            <span>Promo kod</span>{" "}
            <span className="summary-item-price">
              0.00
              <FontAwesomeIcon icon="manat-sign" />
            </span>{" "}
          </li>
          <li className="summary-item">
            <span>Cəmi</span>{" "}
            <span className="summary-item-price">
              {cart?.subtotal?.formatted}
              <FontAwesomeIcon icon="manat-sign" />{" "}
            </span>{" "}
          </li>
        </ul>
      )}{" "}
    </div>
  );
};

export default CartSummary;
