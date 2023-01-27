import { useSelector } from "react-redux";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartLlist from "./CartList/CartLlist";
import { useNavigate } from "react-router-dom";
import { checkoutAction } from "../../../../redux/action/chechout";
import { useDispatch } from "react-redux";
import { setCheckoutToken } from "../../../../redux/reducer/checkoutReducer";
import { setProceedCheckout } from "../../../../redux/reducer/checkoutReducer";

const Cart = () => {
  const { cart } = useSelector((state: any) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // * ---------Get/reset checkout token------------
  const onclickHandler = () => {
    dispatch(setCheckoutToken({}));
    dispatch(checkoutAction(cart.id));
    dispatch(setProceedCheckout(true))
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h6 className="cart-title">Səbət ({cart.total_items} məhsul)</h6>
      <div className="cart-content">
        {cart.total_items > 0 ? (
          <>
            <CartLlist />
            <button onClick={onclickHandler} className="main-button">
              Checkout
            </button>
          </>
        ) : (
          <CartEmpty text="Səbətiniz halhazırda boşdur" />
        )}
      </div>
    </div>
  );
};

export default Cart;
