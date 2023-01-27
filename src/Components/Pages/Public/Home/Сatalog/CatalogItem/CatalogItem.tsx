import { Link } from "react-router-dom";
import { ChevronRightTwoTone } from "@mui/icons-material";

interface CatalogItemProps {
  name: string;
  count: number;
  image: string;
  link: string;
}

const CatalogItem = (props: CatalogItemProps) => {
  return (
    <div className="catalog-item">
      <div className="category-info">
        <p className="category-name">{props.name}</p>
        <p className="category-count">Məhsul sayı: {props.count}</p>
        <Link to={`/products?category=${props.link}`}>
          Məhsullara keçid
          <ChevronRightTwoTone />
        </Link>
      </div>
      <div className="catalog-item-image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default CatalogItem;
