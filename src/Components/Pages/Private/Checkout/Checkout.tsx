import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
//*-----------MUI icons/components------------------
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//*-----------Components-------------------------------
import PrivateInformation from "./PrivateInformation/PrivateInformation";
import Delivery from "./Delivery/Delivery";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import AccordionTitle from "./AccordionTItle/AccordionTitle";

export interface CheckoutFormsProps {
  submit: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkout = () => {
  const { proceedCheckout } = useSelector((state: any) => state.checkout);

  //*------------------Accordion form checked states------------------
  const [detailsSubmit, setDetailsSubmit] = useState<boolean>(false);
  const [adressSubmit, setAdressSubmit] = useState<boolean>(false);
  const [paymentSubmit, setPaymentSubmit] = useState<boolean>(false);

  //*----------------Toggle accordions states-------------------
  const [detailsExpand, setDetailsExpand] = useState<boolean>(true);
  const [adressExpand, setAdressExpand] = useState<boolean>(false);
  const [paymentExpand, setPaymentExpand] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!proceedCheckout) {
    return <Navigate to="/cart" />;
  }
  return (
    <div className="checkout">
      <h5 className="chechout-title">Ödəmə</h5>
      <Accordion
        // Private information
        expanded={detailsExpand}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AccordionSummary>
          <AccordionTitle
            state={detailsSubmit}
            setState={setDetailsSubmit}
            text="1. Şəxsi məlumatlar"
            expand={detailsExpand}
            setExpand={setDetailsExpand}
          />
        </AccordionSummary>
        <AccordionDetails>
          <PrivateInformation submit={detailsSubmit} setSubmit={setDetailsSubmit} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        // Shippping
        expanded={adressExpand}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AccordionSummary>
          <AccordionTitle
            state={adressSubmit}
            setState={setAdressSubmit}
            text="2. Çatdırılma"
            expand={adressExpand}
            setExpand={setAdressExpand}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Delivery setSubmit={setAdressSubmit} submit={adressSubmit} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        // Payment method
        expanded={paymentExpand}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AccordionSummary>
          <AccordionTitle
            state={paymentSubmit}
            setState={setPaymentSubmit}
            text="3. Ödəmə üsulu"
            expand={paymentExpand}
            setExpand={setPaymentExpand}
          />
        </AccordionSummary>
        <AccordionDetails>
          <PaymentMethod
            setSubmit={setPaymentSubmit}
            submit={paymentSubmit}
            adress={adressSubmit}
            information={detailsSubmit}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Checkout;
