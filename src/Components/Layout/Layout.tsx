import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import WindowSizeProvider from "../Context/WidthContext";
import { useDispatch } from "react-redux";
import { getCartAction } from "../../redux/action/cart";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAction());
  }, []);
  return (
    <>
      <WindowSizeProvider>
        <Header />
      </WindowSizeProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
