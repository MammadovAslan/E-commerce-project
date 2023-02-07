import { useState, useEffect, useRef, useContext } from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import HeaderLoading from "./HeaderLoading/HeaderLoading";

//*-----Redux/context------
import { RootState } from "../../../redux/store/store";
import { WindowSizeContext } from "../../Context/WidthContext";
import { useSelector } from "react-redux";

//*-----MUI icons------
import { ShoppingCartOutlined, PersonOutlineOutlined } from "@mui/icons-material";

//*-----Components------
import Navbar from "./Navbar/Navbar";
import SearchList from "./SearhList/SearchList";
import MainButton from "../../Utils/MainButton/MainButton";
import SearchHistory from "./SearchHistory/SearchHistory";
import { loadingSpinner } from "../../Utils/Loading/Loading";

const Header = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [toggleHistory, setToggleHistory] = useState<boolean>(false);

  const sizeState = useContext<any>(WindowSizeContext);

  const { filters, cart, categories, auth } = useSelector((state: RootState | any) => state);

  const searchRef = useRef<any>();

  //*-----------------Remove scroll when sidebar open-----------------------

  useEffect(() => {
    document.body.style.overflow = navbarToggle ? "hidden" : "unset";
  }, [navbarToggle]);

  useEffect(() => {
    setSearchOpen(!(searchValue === ""));
  }, [searchValue]);

  //*-----------------Remove scroll when window width <988px-----------------------

  useEffect(() => {
    document.body.style.overflow =
      (searchOpen || filters) && sizeState.innerWidth < 988 ? "hidden" : "unset";
  }, [searchOpen, filters]);

  //*-----------------Hide navbar and search input-----------------------

  const onclickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as Element;

    if (target.classList.contains("search-button")) {
      setNavbarToggle(false);
      searchRef?.current?.focus();
    }

    if (target.classList.contains("shadow")) {
      setSearchOpen(false);
    }

    if (target.tagName === "A") {
      setNavbarToggle(false);
    }

    if (
      !target.parentElement?.classList.contains("search-history") &&
      !target.parentElement?.classList.contains("search-bar")
    ) {
      setToggleHistory(false);
    }
  };

  //*-----------------Limit search history by 5 items-----------------------

  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    if (e.target.value !== "") {
      if (searchHistory.length >= 5) {
        setSearchHistory((prev) => [...prev.slice(1, 5), e.target.value.trim()]);
      } else {
        setSearchHistory((prev) => [...prev, e.target.value.trim()]);
      }
    }
  };

  const debouncedSearch = debounce(updateSearch, 1000);

  return (
    <header className="header" onClick={onclickHandler}>
      <div className="header-main">
        <div className="tello-logo">
          <div className="header-menu">
            <input
              id="menu__toggle"
              type="checkbox"
              checked={navbarToggle}
              onChange={(e) => {
                setNavbarToggle(e.target.checked);
              }}
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <div className="menu-box">
              {categories.loading && loadingSpinner}
              {/* Navbar mobile*/}
              <Navbar />
              <div className="menu-buttons">
                {auth.auth ? (
                  <MainButton link="/profile" text="Profile" width="156" />
                ) : (
                  <>
                    <MainButton link="/login" text="Daxil ol" width="156" />
                    <MainButton link="/signup" text="Qeydiyyat" width="156" />
                  </>
                )}
              </div>
            </div>
          </div>
          <Link to="/" className="link-home">
            <div className="header-logo">
              <img
                src="images/footer/Artboard 19@2x.svg"
                alt="tello-logo"
                className="header-logo-image"
              />
              <h3 className="company-name">Tello</h3>
            </div>
          </Link>
        </div>
        <div className="search-bar">
          <label htmlFor="search" className="search-button-label">
            <button></button>
          </label>
          <input
            ref={searchRef}
            type="search"
            id="search"
            placeholder="Axtarış..."
            onChange={debouncedSearch}
            onFocus={() => setToggleHistory(true)}
            autoComplete="off"
          />
          {searchOpen && (
            <>
              <SearchList
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchRef={searchRef}
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
              />
            </>
          )}
          {searchRef?.current?.value === "" && toggleHistory && searchHistory.length > 0 && (
            <SearchHistory
              historyArray={searchHistory}
              setHistoryArray={setSearchHistory}
              searchRef={searchRef}
              setSearchValue={setSearchValue}
              setToggleHistory={setToggleHistory}
            />
          )}
        </div>
        {navbarToggle ? (
          <label htmlFor="search" className="search-button-label dark">
            <button className="search-button"></button>
          </label>
        ) : (
          <div className="header-icons">
            {/* Icons */}
            <Link to="/profile">
              <PersonOutlineOutlined className="icon-link" />
            </Link>
            <span className="cart">
              <Link to="/cart">
                <ShoppingCartOutlined className="icon-link" />
              </Link>
              <span className="cart-items-count">{cart.cart.total_items}</span>
            </span>
          </div>
        )}
        <nav className="navbar">
          {categories.loading && <HeaderLoading />}
          {/* Navbar desctop */}
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
