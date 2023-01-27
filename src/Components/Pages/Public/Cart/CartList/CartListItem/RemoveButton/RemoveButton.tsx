import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Commerce from "@chec/commerce.js";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../../../../redux/reducer/cartReducer";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface RemoveButtonProsp{
    itemId:string
}

const RemoveButton = (props:RemoveButtonProsp) => {
    const dispatch = useDispatch()
    const removeItem = async () => {
        try {
          const item = await commerce.cart.remove(props.itemId);
          dispatch(setCart(item));
        } catch (error) {}
      };
    

  return (
    <button className="delete-cart-item" onClick={removeItem}>
        <DeleteForeverOutlinedIcon />
      </button>
  )
}

export default RemoveButton