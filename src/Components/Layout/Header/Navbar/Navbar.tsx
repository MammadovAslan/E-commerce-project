import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../../../redux/action/categories";
import { RootState } from "../../../../redux/store/store";
import { setCategories } from "../../../../redux/reducer/categoriesReducer";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categories, error, loading } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    if (!localStorage.getItem("categories")) {
      dispatch(getCategoriesAction());
    }
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  if (error) {
    return <h1 style={{ color: "red" }}>Error</h1>;
  }

  function onclickHandler(name: string, type?: string) {
    navigate(`products?${type}=${name}`);
  }

  return (
    <ul className="navbar-items">
      {!loading && (
        <>
          {categories &&
            categories?.map((el: any) => {
              if (el.name === "Telefon") {
                return el.children.map((children: any) => (
                  <li
                    key={children.id}
                    onClick={() => {
                      onclickHandler(children.slug, "brand");
                    }}
                  >
                    <Link to={`/products`}> {children.name}</Link>{" "}
                  </li>
                ));
              } else if (el.name === "Yeni" || el.name === "Bütün Brendlər") {
                if (el.name === "Yeni") {
                  return (
                    <li key={el.id}>
                      <Link to={`/products?type=new`}> {el.name}</Link>{" "}
                    </li>
                  );
                }
                return (
                  <li key={el.id}>
                    <Link to={`/products`}> {el.name}</Link>{" "}
                  </li>
                );
              }
            })}
        </>
      )}
    </ul>
  );
};

export default Navbar;
