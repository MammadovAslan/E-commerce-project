import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OrderItem from "../OrderItem/OrderItem";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

interface OrderPros {
  order: any;
  index: number;
}

const Order = (props: OrderPros) => {
  const [expand, setExpand] = useState(props.index === 0);

  const createDate = new Date(props.order.created * 1000).toLocaleDateString();
  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        onClick={() => {
          setExpand((prev) => !prev);
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Sifariş № {props.order.customer_reference} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {" "}
        <h6 className="create-time">Sifariş tarixi: {createDate}</h6>
        <div className="private-main">
          <div className="order">
            <div className="order-items">
              {props.order.order.line_items.map((item: any) => (
                <OrderItem
                  key={item.id}
                  date={props.order.created}
                  image={item.image.url}
                  name={item.product_name}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="order-details">
              <div className="customer-info">
                <h4>Şəxsi məlumatlar</h4>
                <p>{props.order.customer.firstname}</p>
                <p>{props.order.customer.lastname}</p>
                <p>{props.order.customer.email}</p>
                <p>{props.order.customer.phone}</p>
              </div>
              <div className="shipping-info">
                <h4>Çatdırılma ünvanı</h4>

                <p>{props.order.shipping.town_city}</p>
                <p>{props.order.shipping.county_state}</p>
                <p>{props.order.shipping.street}</p>
                <p>{props.order.shipping.postal_zip_code}</p>
                <p>{props.order.shipping.name}</p>

                <div className="order-status">
                  <span>Status:</span>
                  <span>
                    {props.order.status_fulfillment[0].toUpperCase() +
                      props.order.status_fulfillment.split("_").join(" ").slice(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="order-summary">
              <h4>Ödəmə detalları</h4>
              <p>
                <span>Ödəmə metodu:</span>
                <span>
                  <CreditCardOutlinedIcon />
                  Kart ilə
                </span>
              </p>
              <p>
                <span>Toplam məbləğ:</span>
                <span> {props.order.order.subtotal.formatted_with_symbol}</span>
              </p>
              <p>
                <span>Təcili çatdırılm:</span>
                <span> {props.order.order.shipping.price.formatted_with_symbol}</span>
              </p>
              <p>
                <span>Promo kod:</span>
                <span> 0</span>
              </p>
              <p>
                <span>Cəmi:</span>
                <span> {props.order.order.total_paid.formatted_with_symbol}</span>
              </p>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Order;
