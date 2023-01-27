import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { setPaymentMethod } from "../../../../../redux/reducer/checkoutReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCheckoutSubmit } from "../../../../../redux/reducer/checkoutReducer";
import { useState } from "react";

interface PaymentMethodProps {
  submit: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  information: boolean;
  adress: boolean;
}

const PaymentMethod = (props: PaymentMethodProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const { paymentMethod } = useSelector((state: any) => state.checkout);

  const onclickHandler = () => {
    if (props.adress && props.information) {
      dispatch(setCheckoutSubmit(true));
      navigate("/checkout/summary");
    } else {
      setError(true);
    }
  };

  return (
    <div className="payment-methods-container">
      <div className="payment-methods">
        <div className="payment-method">
          <label
            htmlFor="card_payment"
            className={`payment-label ${paymentMethod === "card" ? "selected-method" : ""}`}
          >
            <CreditCardOutlinedIcon />
            <span className="payment-method-text">Onlayn kart ilə ödəmə</span>
          </label>
          <input
            type="radio"
            name="payment-method"
            id="card_payment"
            value="card"
            onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
          />
        </div>
      </div>
      {paymentMethod && (
        <button className="main-button" onClick={onclickHandler}>
          Təsdiq et{" "}
        </button>
      )}
      {error && <p className="unfilled-forms-error" style={{margin:0,color:'red'}}>Pleas fill all forms</p>}
    </div>
  );
};

export default PaymentMethod;
