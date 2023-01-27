import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { setFiltersFalse } from "../../../../../redux/reducer/filtersReducer";
import { useDispatch, useSelector } from "react-redux";

//*-----MUI------
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionItem from "./AccordioinItem/AccordionItem";
import PriceFIlter from "./PriceFilter/PriceFIlter";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // *------------Search params' states----------------------
  const [brands, setBrands] = useState<string[]>(searchParams.get("brand")?.split(" ") || []);
  const [cats, setCats] = useState<string[]>(searchParams.get("category")?.split(" ") || []);
  const [type, setType] = useState<string[]>(searchParams.get("type")?.split(" ") || []);
  const [minPrice, setMinPrice] = useState(searchParams.get("min") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max") || "");
  //*---------------Redux Store------------------------------
  const { filters, categories } = useSelector((state: any) => state);

  //*--------------Search Params arrays-----------------------
  const [brandsExpand, setBrandsExpand] = useState(brands.length > 0);
  const [catsExpand, setCatsExpand] = useState(cats.length > 0);
  const [typeExpand, setTypeExpand] = useState(type.length > 0);
  const [priceExpand, setPriceExpand] = useState(!!maxPrice || !!minPrice);

  const dispatch = useDispatch();
  
  //*-------------Set searchParams' states----------------------

  useEffect(() => {
    const brandsArray: string[] = searchParams.get("brand")?.split(" ") || [];
    setBrands(brandsArray);
    const catsArray: string[] = searchParams.get("category")?.split(" ") || [];
    setCats(catsArray);
    const typeArray: string[] = searchParams.get("type")?.split(" ") || [];
    setType(typeArray);
  }, [searchParams]);

  const onsubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    brands.length !== 0
      ? searchParams.set(`brand`, brands.join(" "))
      : searchParams.delete("brand");
    cats.length !== 0
      ? searchParams.set("category", cats.join(" "))
      : searchParams.delete("category");
    type.length !== 0 ? searchParams.set("type", type.join(" ")) : searchParams.delete("type");

    minPrice !== "" && minPrice !== "0" && searchParams.set("min", minPrice);
    maxPrice !== "" && maxPrice !== "0" && searchParams.set("max", maxPrice);

    if (maxPrice && minPrice) {
      searchParams.delete("max");
      searchParams.delete("min");

      searchParams.set("min", minPrice);
      searchParams.set("max", maxPrice);
      setSearchParams(searchParams);
    }
    

    (minPrice === "" || minPrice === "0") && searchParams.delete("min");
    (maxPrice === "" || maxPrice === "0") && searchParams.delete("max");
    setSearchParams(searchParams);
  };

  return (
    <div className={`products-sidebar ${filters && "show"}`}>
      <h3 className="sidebar-title">
        <button className="close-filters-button" onClick={() => dispatch(setFiltersFalse())}>
          X
        </button>
        Filterləmələr
        <div className="line" />
      </h3>
      <form onSubmit={onsubmitHandler}>
        <Accordion expanded={brandsExpand}>
          {/* Brands filter */}
          <AccordionSummary
            expandIcon={brandsExpand ? <RemoveOutlinedIcon/> :<AddOutlinedIcon />}
            onClick={() => {
              setBrandsExpand((prev) => !prev);
            }}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Brend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              {categories.categories &&
                categories.categories?.map((cat: any) => {
                  if (cat.children.length !== 0) {
                    return cat.children.map((el: any) => (
                      <AccordionItem
                        key={el.id}
                        name={el.name}
                        slug={el.slug}
                        type="brand"
                        params={brands}
                        setParams={setBrands}
                      />
                    ));
                  }
                })}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={priceExpand}>
          {/* Price filter */}
          <AccordionSummary
            expandIcon={priceExpand ? <RemoveOutlinedIcon/> :<AddOutlinedIcon />}
            onClick={() => {
              setPriceExpand((prev) => !prev);
            }}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Qiymət </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PriceFIlter max={maxPrice} min={minPrice} setMax={setMaxPrice} setMin={setMinPrice} />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={catsExpand}>
          {/* Categories filter */}
          <AccordionSummary
            expandIcon={catsExpand ? <RemoveOutlinedIcon/> :<AddOutlinedIcon />}
            onClick={() => {
              setCatsExpand((prev) => !prev);
            }}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              {categories.categories &&
                categories.categories?.map((cat: any) => {
                  if (
                    cat.slug === "accessories" ||
                    cat.slug === "smart-watch" ||
                    cat.slug === "phones"
                  ) {
                    return (
                      <AccordionItem
                        key={cat.id}
                        name={cat.name}
                        slug={cat.slug}
                        type="category"
                        params={cats}
                        setParams={setCats}
                      />
                    );
                  }
                })}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={typeExpand}>
          {/* Type filter */}
          <AccordionSummary
            expandIcon={typeExpand ? <RemoveOutlinedIcon/> :<AddOutlinedIcon />}
            onClick={() => {
              setTypeExpand((prev) => !prev);
            }}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Yeni/Köhnə</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
              {categories.categories &&
                categories.categories?.map((cat: any) => {
                  if (cat.slug === "new") {
                    return (
                      <AccordionItem
                        key={cat.id}
                        name={cat.name}
                        slug={cat.slug}
                        type="type"
                        params={type}
                        setParams={setType}
                      />
                    );
                  }
                })}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <button className="filter-button main-button" onClick={() => dispatch(setFiltersFalse())}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
