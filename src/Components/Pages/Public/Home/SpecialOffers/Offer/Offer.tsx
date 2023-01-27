import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface OfferInterface {
  limit: number;
  category: string[];
  order: string;
  sortOption: string;
}

const Offer = (props: OfferInterface) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [title, setTItle] = useState<string>("");

  const titles: string[] = [
    "That's what you need",
    "Don't miss it!",
  ];

  const getRandomNumber = (): number => {
    return Math.floor(Math.random() * titles.length);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const params = {
        limit: props.limit,
        sortBy: props.sortOption,
        category_slug: props.category,
        sortDirection: props.order,
      };

      const resp = await commerce.products.list(params);
      setProducts(resp.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    setTItle(titles[getRandomNumber()]);
  }, []);

  return (
    products &&
    products.map((el: any) => (
      <div className="offer" key={el.id}>
        <div className="offer-description">
          <div className="offer-title">
            <h4 className="offer-name">{products && el?.name}</h4>
            <h4 className="offer-caption">
              <br /> {title}
            </h4>
          </div>
          <div className="offer-price">
            <p className="offer-full-price">
              {products && el?.price?.formatted_with_code} <br />{" "}
              <span className="price-credit">
                Faizsiz taksitlə {Math.floor(products && el.price?.raw / 12)} AZN-dən
              </span>
            </p>
          </div>
          <div className="button-buy-now">
            <Link to={`/products/${el.name}`}>Indi alın</Link>
          </div>
        </div>
        <div className="offer-image">
          <img src={products && el?.image?.url} alt="" />
        </div>
      </div>
    ))
  );
};

export default Offer;
