import CatalogItem from "./CatalogItem/CatalogItem";
import { useSelector } from "react-redux";

const Catalog = () => {
  const {categories,error } = useSelector((state:any)=>state.categories)

  if(error){
    return <h1 style={{color:'red'}}>Error</h1>
  }
  return (
    <div className="catalog">
      {categories &&
        categories?.map((el: any) => {
          if (el.name === "Telefon" || el.name === "Aksesuar" || el.name === "Smart Saat") {
            return (
              <CatalogItem
                key={el.id}
                name={el.name}
                count={el.products}
                image={el.assets[0].url}
                link={el.slug}
              />
            );
          }
        })}
    </div>
  );
};

export default Catalog;
