import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../../../api/axios";
import { useDispatch } from "react-redux";
import { setCustomer, setAuth } from "../../../../redux/reducer/authReducer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalProfile from "./ModalProfile/ModalProfile";

const Profile = () => {
  const { customer, token, customerId } = useSelector((state: RootState) => state.auth);
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // * -------------useForm hook------------------------
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  //*----------Update user's data------------------------
  const updateCustomer = async (obj: any) => {
    try {
      const request = await axiosInstance.put(`${customer.id}`, obj);
      dispatch(setCustomer(request.data));
      request.status === 200 && setModal(true);
      setTimeout(() => {
        setModal(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const headers = {
    "X-Authorization": "sk_493457d0d7c10bd93938cb193c2f141f589a69dc2261f",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  //*--------------Get user by jwt and id------------------------
  const getCustomer = async () => {
    try {
      const res = await axios.get(`https://api.chec.io/v1/customers/${customerId}`, { headers });
      dispatch(setCustomer(res.data));
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message === "Request failed with status code 500" ||
          error.message === "Request failed with status code 401"
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("customerId");

          dispatch(setAuth(false));
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    if (customerId !== "" && token !== "") {
      getCustomer();
    }
  }, [token, customerId]);

  //* -----------------Fill inputs with data from axios-----------------------------
  useEffect(() => {
    if (Object.keys(customer).length > 0) {
      setValue("firstname", customer.firstname);
      setValue("lastname", customer.lastname);
      setValue("email", customer.email);
      setValue("phone", customer.phone);
    }
  }, [customer]);

  const onsubmit = (data: any) => {
    const { firstname, lastname, phone, email } = data;
    updateCustomer({
      firstname,
      lastname,
      phone,
      email,
    });
  };

  return (
    <div className="profile-orders private-page">
      {modal && <ModalProfile setModal={setModal} />}
      <h5>Şəxsi məlumatlar </h5>
      <div className="profile private-main">
        <form className="profile-form" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-container">
            <label className="profile-label">
              Ad <br />
              <input type="text" {...register("firstname")} placeholder="Adınızı daxil edin" />
              <p className="error-message">
                {errors?.name?.type === "required" && "*Adinizi daxil edin"}
              </p>
            </label>
            <label className="profile-label">
              Soyad <br />
              <input type="text" {...register("lastname")} placeholder="Soyadınızı daxil edin" />
              <p className="error-message">
                {errors?.surname?.type === "required" && "*Soyadinizi daxil edin"}
              </p>
            </label>
            <label className="profile-label">
              E-mail <br />
              <input type="text" {...register("email")} placeholder="nümunə@gmail.com" />
              <p className="error-message">
                {errors?.name?.type === "required" && "*Emaili daxil edin"}
              </p>
            </label>
            <label className="profile-label">
              Mobil nömrə <br />
              <input type="tel" {...register("phone")} placeholder="(000) 000 00 00" />
            </label>
          </div>
          <button className="main-button">Məlumatları yenilə</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
