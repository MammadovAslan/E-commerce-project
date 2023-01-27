import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";

import Commerce from "@chec/commerce.js";
import { useDispatch } from "react-redux";
import { setCart } from "../../../../../../redux/reducer/cartReducer";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface ListItemProps {
  image: string;
  name: string;
  price: number;
  itemId: string;
}

const ListItem = (props: ListItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const item = await commerce.cart.add(props.itemId);
    dispatch(setCart(item));
  };

  const showProductDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    navigate(`/products/${props.name}`);
  };

  return (
    <div className="list-item" onClick={showProductDetails}>
      <div className="item-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="item-name">
        <p>{props.name}</p>
      </div>
      <div className="item-price">{props.price}</div>
      <button className="add-to-cart-button main-button" onClick={addToCart}>
        <ShoppingCartOutlined />
      </button>
    </div>
  );
};

export default ListItem;
