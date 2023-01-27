import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Commerce from "@chec/commerce.js";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../redux/reducer/cartReducer";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface AddButtonProps{
  id:string,
  quantity:number
}

const AddProductButtons = (props:AddButtonProps) => {

  const dispatch = useDispatch()

  const addToCart = async () =>{
    const item = await commerce.cart.add(props.id,props.quantity)
    dispatch(setCart(item))
  }

  return (
    <button className="add-product-button" onClick={addToCart}>
      <ShoppingCartOutlinedIcon />
      Səbətə at
    </button>
  );
};

export default AddProductButtons;
