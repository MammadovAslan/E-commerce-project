import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import uuid from "react-uuid";
import { getAdressesAction } from "../../../../../redux/action/chechout";
import DeliveryAdress from "./DeliveryAdress/DeliveryAdress";

const DeliveryAdresses = () => {
  const { adresses } = useSelector((state: any) => state.checkout);
  const { customerId, token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const adressesArray = adresses.data && [...adresses.data].reverse();

  useEffect(() => {
    dispatch(getAdressesAction({ id: customerId, token: token }));
  }, []);

  return (
    <div className="profile-orders private-page">
      <h5>Çatdırılma ünvanı </h5>
      <div className="private-main">
        {adresses?.data && (
          <div className="adresses">
            {adressesArray.map((el: any, ind: number) => (
              <DeliveryAdress
                city={el.county_state}
                country={el.town_city}
                street={el.street}
                zip={el.postal_zip_code}
                index={ind}
                key={uuid()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryAdresses;
