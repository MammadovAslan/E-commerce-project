import { useState, useEffect, useContext } from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { WindowSizeContext } from "../../../Context/WidthContext";
import { useSearchParams } from "react-router-dom";

import Commerce from "@chec/commerce.js";
const commerce = new Commerce("pk_493453d76f26aadbc08099247c3aac974fd51e19ca6c3");

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchRef: any;
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchList = (props: SearchProps) => {
  const [searchResult, setSearchResult] = useState<[]>([]);
  const sizeState = useContext<any>(WindowSizeContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const products: any = await commerce.products.list();
        setSearchResult(
          await products?.data?.filter((el: any) =>
            el.name.toLowerCase().includes(props.searchValue.toLowerCase())
          )
        );
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getData();
  }, [props.searchValue]);

  const clearSearch = () => {
    props.searchRef.current.value = "";
    props.setSearchValue("");
    props.searchRef.current.focus();
  };

  return (
    <div className="search-list">
      <div className="search-container">
        <div className="search-list-title">
          <h4 className="search-results">Nəticələr</h4>
          <button className="clear-search" onClick={clearSearch}>
            Təmizlə
          </button>
        </div>
        <div className="search-list-products">
          {loading ? (
            <div>Please wait...</div>
          ) : error ? (
            "Error"
          ) : !loading && searchResult?.length === 0 ? (
            <div>No Results*</div>
          ) : (
            searchResult?.map((el: any, ind: number) => (
              <ProductItem
                key={ind}
                name={el.name}
                price={el.price.formatted}
                img={el.image.url}
                clear={clearSearch}
              />
            ))
          )}
        </div>
      </div>
      <div className="search-list-button">
        <Link to="/products" className="show-all-button" onClick={()=> props.setSearchOpen(false)}>
          Hamısını göstər
        </Link>
      </div>
      {sizeState.innerWidth! < 988 && <div className="shadow"></div>}
    </div>
  );
};

export default SearchList;
