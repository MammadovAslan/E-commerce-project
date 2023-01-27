import { useParams, useNavigate, Navigate } from "react-router-dom";
import { axiosInstance } from "../../../../api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadingSpinner } from "../../../Utils/Loading/Loading";
import { RootState } from "../../../../redux/store/store";
import { useDispatch } from "react-redux";
import { setCustomerId, setToken, setAuth } from "../../../../redux/reducer/authReducer";

const Token = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  //*------------Exchange email token to JWT---------------------
  const getCustomer = async (token: string | undefined) => {
    try {
      const data = await axiosInstance.post("/exchange-token", { token });
      localStorage.setItem("token", data.data.jwt);
      dispatch(setToken(data.data.jwt));
      const customer = await axiosInstance.get(`/${data.data.customer_id}`);
      localStorage.setItem("customerId", customer.data.id);
      dispatch(setCustomerId(customer.data.id));
      dispatch(setAuth(true));      
    } catch (error) {
      console.log(error);
    }
  };

  // *--------------Get email token from params--------------------
  useEffect(() => {
    getCustomer(params.token);
  }, []);

  useEffect(() => {
    auth && navigate("/profile");
  }, [auth]);

  return (
    <div>
      {loadingSpinner}
      {/* This page will always redirect to other page, depending on auth state value */}
      {<Navigate to={auth ? `/profile` : "/login"} />}
    </div>
  );
};

export default Token;
