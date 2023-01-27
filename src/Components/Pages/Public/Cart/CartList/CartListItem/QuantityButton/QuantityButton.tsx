import Commerce from "@chec/commerce.js";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../../../../redux/reducer/cartReducer";
import {useState} from 'react'
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface QuantityButtonProps {
  symbol: string;
  increase: boolean;
  quantity: number;
  itemId: string;
  setLoading:any
  loading:boolean
}

const QuantityButton = (props: QuantityButtonProps) => {
  const dispatch = useDispatch();

  const changeItemQuantity = async () => {
    try {
      props.setLoading(true)
      const item = await commerce.cart.update(props.itemId, {
        quantity: props.increase ? props.quantity + 1 : props.quantity - 1,
      });
      dispatch(setCart(item));
    } catch (error) {
      console.log(error);
    }finally{
      props.setLoading(false)
    }
  };

  return (
    <button disabled={props.loading} className="quantity-button" onClick={changeItemQuantity}>
      {props.symbol}
    </button>
  );
};

export default QuantityButton;
