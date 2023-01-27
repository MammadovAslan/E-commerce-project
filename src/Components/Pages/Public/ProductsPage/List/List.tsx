import { useState, useEffect } from "react";
import Commerce from "@chec/commerce.js";
import ListItem from "../../Home/ProductsList/ListItem/ListItem";
import SelectOrder from "./SelectOrder/SelectOrder";
import { useSearchParams } from "react-router-dom";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { useDispatch } from "react-redux";
import { setFiltersTrue } from "../../../../../redux/reducer/filtersReducer";
import { loadingSpinner } from "../../../../Utils/Loading/Loading";
import { setOrderCapture } from "../../../../../redux/reducer/checkoutReducer";
import { Product } from "@chec/commerce.js/types/product";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

const List = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  //*----------Arrays for searchParams----------------
  const brandParams: string[] = [];
  const categoryParams: string[] = [];
  const typeParams: string[] = [];
  const min: string | null = searchParams.get("min");
  const max: string | null = searchParams.get("max");

  //*---------Fill saerchParams arrays----------------
  searchParams
    .get("brand")
    ?.split(" ")
    .forEach((el: string) => {
      brandParams.push(el);
    });
  searchParams
    .get("category")
    ?.split(" ")
    .forEach((el: string) => {
      categoryParams.push(el);
    });
  searchParams
    .get("type")
    ?.split(" ")
    .forEach((el: string) => {
      typeParams.push(el);
    });

  const filteredProducts: Product[] = []; //filtered products array

  //*------------Filter products list based on searchParams----------------
  products.forEach((prod: Product) => {
    let brands: boolean = false;
    let categories: boolean = false;
    let type: boolean = false;
    let price: boolean = false;
    //------------Price filter------------
    if (max && !min) {
      if (prod.price.raw <= +max) {
        price = true;
      }
    } else if (min && !max) {
      if (prod.price.raw >= +min) {
        price = true;
      }
    } else if (min && max) {
      if (prod.price.raw >= +min && prod.price.raw <= +max) {
        price = true;
      }
    } else {
      price = true;
    }
    prod.categories.forEach((cat: any) => {
      if (brandParams.length === 0) {
        brands = true;
      }
      if (categoryParams.length === 0) {
        categories = true;
      }
      if (typeParams.length === 0) {
        type = true;
      }
      //------------Brands filter------------
      brandParams.forEach((brand: string) => {
        if (cat.slug === brand) {
          brands = true;
        }
      });
      //------------Categories filter------------

      categoryParams.forEach((category: string) => {
        if (cat.slug === category) {
          categories = true;
        }
      });
      //------------Type filter------------
      typeParams.forEach((category: string) => {
        if (cat.slug === category) {
          type = true;
        }
      });

      if (brands && categories && type && price) {
        filteredProducts.push(prod);
      }
    });
  });

  //*------------Products array with uniuqe items----------------------------
  const result: Product[] = [...new Set(filteredProducts)].sort((a: Product, b: Product) => {
    if (searchParams.get("order")) {
      //---------Price asc/desc order filter-----------------
      return searchParams.get("order") === "asc"
        ? b.price.raw - a.price.raw
        : a.price.raw - b.price.raw;
    }
    return b.created - a.created;
  });

  //*----------Fetch products every time when searchParams change-----------------

  const getProducts = async () => {
    setLoading(true);
    try {
      const resp = await commerce.products.list();
      setProducts(resp.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    dispatch(setOrderCapture({}));
  }, []);

  return (
    <div className="list">
      <div className="list-title">
        <div className="products-count">
          {loading ? "" : products && `${result.length} məhsul tapıldı`}
        </div>
        <div className="list-order-select">
          <button className="toggle-filters-button" onClick={() => dispatch(setFiltersTrue())}>
            <TuneRoundedIcon />
            Filterləmələr
          </button>
          <SelectOrder />
        </div>
      </div>
      <div className="list-items">
        {loading ? (
          loadingSpinner
        ) : error ? (
          <p style={{ color: "red" }}>Error</p>
        ) : (
          products &&
          products.length > 0 &&
          result.map((el: any) => (
            <ListItem
              key={el.id}
              image={el.image.url}
              name={el.name}
              price={el.price.formatted_with_symbol}
              itemId={el.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;
