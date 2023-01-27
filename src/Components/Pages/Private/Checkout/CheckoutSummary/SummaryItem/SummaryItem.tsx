interface Props {
  name: string;
  quantity: number;
  image: string;
  price: string;
}

const SummaryItem = ({ name, image, price, quantity }: Props) => {
  return (
    <div className="summary-item">
      <div className="item-summary">
        <div className="item-image">
          <img src={image} alt="" />
        </div>
        <div className="item-info">
          <div className="item-name">{name}</div>
          <div className="item-quantity">Miqdar: {quantity}</div>
        </div>
      </div>
      <div className="item-price">{price}</div>
    </div>
  );
};

export default SummaryItem;
