import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm,SubmitHandler  } from "react-hook-form";
import SocialsLogin from "../Login/SocialsLogin/SocialsLogin";
import { axiosInstance } from "../../../../api/axios";
import { useSelector } from "react-redux";

// *------------MUI icons----------------------
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const SignUp = () => {
  const { auth } = useSelector((state: any) => state.auth);
  const [passwordType, setPasswordType] = useState("password");
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  // *----------------Show/hide password-----------------------
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  // *---------------useForm hook------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  interface ObjectI{
    firstname:string
    lastname:string
    email:string
    phone:string;
    password:string
  }

  const signUpCustomer = async (obj: ObjectI) => {
    try {
      const data = await axiosInstance.post("", obj);
      //*Redirect to login after users sign up
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      window.scrollTo(0, 0);
      setSignedUp(true);
    }
  };

  const submitHandler:SubmitHandler<any> = (data) => {
    const { fullname, password, email, phone } = data;

    signUpCustomer({
      firstname: fullname.split(" ")[0],
      lastname: fullname.split(" ")[1],
      email,
      phone,
      password,
    });
  };

  if (auth) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      {signedUp ? (
        <div className="signup-success">
          <CheckCircleOutlineOutlinedIcon />
          <p className="signup-success-text">Qeydiyyat tamamlandı.</p>
        </div>
      ) : (
        <div className="signup">
          <div className="signup-form">
            <h4 className="login-title">Qeydiyyat</h4>
            <SocialsLogin />
            <form onSubmit={handleSubmit(submitHandler)}>
              <label className="signup-label">
                {/* Fullname input */}
                Ad, Soyad <br />
                <input
                  type="text"
                  {...register("fullname", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                  placeholder="Ad və soyadınızı daxil edin"
                />
                <p className="error-message">
                  {errors?.fullname?.type === "required" && "*Adınızı daxil edin"}
                </p>
              </label>
              <label className="signup-label">
                {/* Email input */}
                E-mail <br />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="nümunə@gmail.com"
                />
                <p className="error-message">
                  {errors?.email?.type === "required" && "*Emaili daxil edin"}
                </p>
              </label>

              <label className="signup-label">
                {/* Phone number input */}
                Mobil nömrə <br />
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  {...register("phone", { required: true, minLength: 10 })}
                />
                <p className="error-message">{errors?.phone && "*Mobil nomrənizi daxil edin"}</p>
              </label>

              <label className="signup-label password">
                {/* Password input */}
                Şifrə <br />
                <input
                  type={passwordType}
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 8,
                  })}
                  placeholder="Şifrənizi daxil edin"
                />
                <p className="error-message">
                  {errors?.password?.type === "required"
                    ? "*Şifrəni daxil edin"
                    : errors?.password?.type === "minLength" &&
                      "*Şifrə ən az 8 simvoldan ibarət olmalidi"}
                </p>
                <p className="toggle-password" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </p>
              </label>
              <div className="agreement-checkbox-container">
                {/* Terms of use */}
                <input
                  type="checkbox"
                  id="checkbox-agreement"
                  {...register("agreement", { required: true })}
                />
                <label htmlFor="checkbox-agreement"></label>
                <Link to="">İstifadəçi şərtləri</Link>lə razıyam
                <p className="error-message">
                  {errors?.agreement?.type === "required" && "*Еəsdiq tələb olunur"}
                </p>
              </div>
              <button className="login-button main-button">Qeydiyyat</button>
            </form>
          </div>
          <div className="login-image">
            <img src="images/login/Dot Grid.svg" className="image-grid" />
            <img src="images/login/undraw_mobile_devices_k1ok 1.svg" />
            <p className="login-signup">
              Artıq hesabınız var? <Link to="/login">Daxil olun </Link>{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
