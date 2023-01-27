interface OrderItemProps {
  name: string;
  date: number;
  image: string;
  quantity: number;
}

const OrderItem = ({ date, image, name, quantity }: OrderItemProps) => {

  return (
    <div className="order-item">
      <div className="order-item-image">
        <img src={image} />
      </div>
      <div className="order-item-description">
        <h4 className="order-item-name">{name}</h4>
        <div className="order-item-info">
          <div className="order-item-quantity">
            <span>Say:</span>
            <span>{quantity}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderItem;
