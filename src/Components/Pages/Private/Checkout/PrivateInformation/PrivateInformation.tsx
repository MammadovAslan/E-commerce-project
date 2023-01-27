import { useForm, SubmitHandler } from "react-hook-form";
import {
  setFirstname,
  setLastname,
  setPhone,
  setEmail,
} from "../../../../../redux/reducer/checkoutReducer";

import { useDispatch, useSelector } from "react-redux";
import { CheckoutFormsProps } from "../Checkout";

const PrivateInformation = (props: CheckoutFormsProps) => {
  
  const { firstname, lastname, phone, email } = useSelector((state: any) => state.checkout);
  const dispatch = useDispatch();

  //*----------useForm---------------
  type Inputs = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setFirstname(data.firstname));
    dispatch(setLastname(data.lastname));
    dispatch(setPhone(data.phone));
    dispatch(setEmail(data.email));
    props.setSubmit(true);
  };

  if (props.submit) {
    return (
      <div className="submitted-results">
        <p>
          <span>{firstname}</span> <span>{lastname}</span>
        </p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }

  return (
    <div className="private-information">
      <form className="personal-inform-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label className="inform-label">
            Ad <input type="text" {...register("firstname", { required: true, minLength: 2 })} placeholder='Adınızı daxil edin'/>
          </label>
          <p className="error-message">
            {errors?.firstname?.type === "required" && "*Adınızı daxil edin"}
          </p>
        </div>
        <div className="input-field">
          <label className="inform-label">
            Soyad
            <input type="text" {...register("lastname", { required: true, minLength: 2 })} placeholder='Soyadınızı daxil edin'/>
          </label>
          <p className="error-message">
            {errors?.lastname?.type === "required" && "*Soyadını daxil edin"}
          </p>
        </div>
        <div className="input-field">
          <label className="inform-label">
            Mobil nömrə
            <input type="tel" {...register("phone", { required: true, minLength: 10 })} placeholder='000 - 00 - 00'/>
          </label>
          <p className="error-message">{errors?.phone && "*Mobil nömrəni daxil edin"}</p>
        </div>
        <div className="input-field">
          <label className="inform-label">
            E-mail
            <input type="email" {...register("email", { required: true })} placeholder='nümunə@gmail.com'/>
          </label>
          <p className="error-message">
            {errors?.email?.type === "required" && "*Emaili daxil edin"}
          </p>
        </div>
        <button className="main-button">Yadda saxla </button>
      </form>
    </div>
  );
};

export default PrivateInformation;
