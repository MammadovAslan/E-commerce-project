import { Outlet } from "react-router-dom";
import CartSummary from "../../Public/Cart/CartSummary/CartSummary";
import { useSelector } from "react-redux";
const CartCheckout = () => {
  const { cart } = useSelector((state: any) => state.cart);
  return (
    <div className="cart-chechout-container">
      <Outlet />
      {cart.total_items > 0 && <CartSummary />}

    </div>
  );
};

export default CartCheckout;
