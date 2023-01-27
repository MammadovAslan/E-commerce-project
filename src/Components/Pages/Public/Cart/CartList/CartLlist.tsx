import { useSelector } from "react-redux";
import CartListItem from "./CartListItem/CartListItem";

const CartLlist = () => {
  const { cart } = useSelector((state: any) => state.cart);  

  return (
    <ul className="cart-list">
      {cart.line_items &&
        cart.line_items.length > 0 &&
        cart.line_items.map((item: any) => {
          return (
            <CartListItem
              key={item.id}
              itemId={item.id}
              image={item.image.url}
              name={item.name}
              price={item.line_total.formatted_with_symbol}
              quantity={item.quantity}
            />
          );
        })}
    </ul>
  );
};

export default CartLlist;
