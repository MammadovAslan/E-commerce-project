import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import { Link } from "react-router-dom";
import { ChevronRightTwoTone } from "@mui/icons-material";
import { loadingSpinner } from "../../../../Utils/Loading/Loading";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface ProductsListProps {
  title: string;
  limit: number;
  sortOption: string;
  category: string[];
  order: string;
  link: string;
}

const ProductsList = (props: ProductsListProps) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  // *----------Fetch data with params--------------

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
  }, []);

  return (
    <div className="products-list">
      <div className="products-title">
        <h6>{props.title}</h6>
        <Link to={`products${props.link}`}>
          Hamısına bax <ChevronRightTwoTone />
        </Link>
      </div>
      <ul className="list">
        {error && <h3 style={{ color: "red" }}>Network Error</h3>}
        {loading
          ? loadingSpinner
          : products &&
            products?.map((el: any) => (
              <ListItem
                key={el.id}
                image={el.image.url}
                name={el.name}
                price={el.price.formatted_with_symbol}
                itemId={el.id}
              />
            ))}
      </ul>
      <div className="show-all-mobile-link">
        <Link to={`products${props.link}`}>
          Hamısına bax <ChevronRightTwoTone />
        </Link>
      </div>
    </div>
  );
};

export default ProductsList;
