import { Route, Routes } from "react-router-dom";
import "./Components/FontAwesome/FontAwesomeIcons";

//*-----Layout imports------
import Home from "./Components/Pages/Public/Home/Home";
import Layout from "./Components/Layout/Layout";
import ProductsPage from "./Components/Pages/Public/ProductsPage/ProductsPage";
import Main from "./Components/Layout/Main/Main";
import ProductDetails from "./Components/Pages/Public/ProductDetails/ProductDetails";
import Cart from "./Components/Pages/Public/Cart/Cart";
import Login from "./Components/Pages/Public/Login/Login";
import SignUp from "./Components/Pages/Public/SignUp/SIgnUp";
import Private from "./Components/Pages/Private/Private";
import Profile from "./Components/Pages/Private/Profile/Profile";
import Token from "./Components/Pages/Private/Token/Token";
import ProfileOrders from "./Components/Pages/Private/Profile/ProfileOrders/ProfileOrders";
import DeliveryAdresses from "./Components/Pages/Private/Profile/DeliveryAdresses/DeliveryAdresses";
import Checkout from "./Components/Pages/Private/Checkout/Checkout";
import CartCheckout from "./Components/Pages/Private/CartCheckout/CartCheckout";
import CheckoutSummary from "./Components/Pages/Private/Checkout/CheckoutSummary/CheckoutSummary";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<CartCheckout />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout/summary" element={<CheckoutSummary />} />
          <Route element={<Main />}>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:name" element={<ProductDetails />} />
            <Route path="/token/:token" element={<Token />} />
          </Route>
          <Route element={<Private />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<ProfileOrders />} />
            <Route path="/adresses" element={<DeliveryAdresses />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
