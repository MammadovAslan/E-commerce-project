import { useSelector, useDispatch } from "react-redux";
import CartEmpty from "../../../Public/Cart/CartEmpty/CartEmpty";
import { useEffect } from "react";
import { orderAction } from "../../../../../redux/action/chechout";
import { setOrderCapture } from "../../../../../redux/reducer/checkoutReducer";
import Order from "./Order/Order";
import uuid from "react-uuid";

const ProfileOrders = () => {
  const { orders } = useSelector((state: any) => state.checkout);
  const { customerId, token } = useSelector((state: any) => state.auth);

  const dispatch = useDispatch();

  const ordersArray = orders?.data && [...orders?.data].reverse();

  useEffect(() => {
    dispatch(orderAction({ id: customerId, token: token }));
    dispatch(setOrderCapture({}));
  }, []);

  if (orders?.data?.length === 0 || !orders?.data) {
    return <CartEmpty text="Səbətinizdə hazırda heç bir sifarişiniz yoxdur" />;
  }

  return (
    <div className="profile-orders private-page">
      <h5>Sifarişlərim </h5>
      {orders?.data && (
        <div className="orders">
          {ordersArray.map((el: any, ind: number) => (
            <Order order={el} key={uuid()} index={ind} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileOrders;
