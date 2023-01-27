import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SummaryItem from "./SummaryItem/SummaryItem";
import { refreshCartAction } from "../../../../../redux/action/cart";
import { Elements, CardElement, ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { loadingSpinner } from "../../../../Utils/Loading/Loading";
import { orderCaptureAction } from "../../../../../redux/action/chechout";
import { setOrderCapture, setProceedCheckout } from "../../../../../redux/reducer/checkoutReducer";

const CheckoutSummary = () => {
  // *------------Stripe public key-----------
  const { REACT_APP_STRIPE_PUBLIC_KEY } = process.env;

  //*-------------Stripe state----------------
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(`${REACT_APP_STRIPE_PUBLIC_KEY}`)
  );
  const dispatch = useDispatch();

  const {
    //*-----------Redux checkout states------------------
    checkoutSubmit,
    firstname,
    lastname,
    email,
    adress,
    apartment,
    zip,
    checkoutToken,
    countryName,
    subdivision,
    shippingMethodName,
    shippingCountrie,
    shippingMethod,
    loading,
    orderCapture,
  } = useSelector((state: any) => state.checkout);
  const { cart } = useSelector((state: any) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setOrderCapture({}));
  }, []);

  //*----------Refresh cart when order captured-----------------------
  useEffect(() => {
    if (orderCapture && Object.keys(orderCapture).length > 0) {
      dispatch(refreshCartAction());
    }
  }, [orderCapture]);

  const handleSubmit = async (e: any, elements: any, stripe: any) => {
    e.preventDefault();
    // *------------Stripe Card payment ----------------------
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname,
          lastname,
          email,
        },
        shipping: {
          name: shippingMethodName,
          street: `${adress} ${apartment}`,
          town_city: countryName,
          county_state: subdivision,
          postal_zip_code: zip,
          country: shippingCountrie,
        },
        fulfillment: {
          shipping_method: shippingMethod,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      dispatch(orderCaptureAction({ id: checkoutToken.id, order: orderData }));
      dispatch(setProceedCheckout(false));
    }
  };

  if (!checkoutSubmit) {
    return <Navigate to="/cart" />;
  }

  // *--------------Seccess message----------------------------
  if (orderCapture && Object.keys(orderCapture).length > 0) {
    return (
      <div className="order-success">
        <div className="order-success-icon">
          <CheckCircleOutlinedIcon />
        </div>
        <p className="order-success-text">Sifarişiniz üçün təşəkkür edirik</p>
        <Link className="main-button" to="/orders">
          Profilə keçin
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-summary">
      <h4 className="checkout-summary-title">Sifariş Xülasə</h4>
      <div className="items-container">
        {cart.line_items.map((item: any) => (
          <SummaryItem
            key={item.id}
            name={item.name}
            image={item.image.url}
            quantity={item.quantity}
            price={item.price.formatted_with_symbol}
          />
        ))}
      </div>
      <div className="checkout-total">
        <div className="total-price">
          <span className="total"> Total</span>{" "}
          <span className="total-price-number">{cart.subtotal.formatted_with_symbol}</span>
        </div>
      </div>
      {loading ? (
        loadingSpinner
      ) : (
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br />
                <br />
                <button className="main-button">Pay {cart.subtotal.formatted_with_symbol}</button>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      )}
    </div>
  );
};

export default CheckoutSummary;
