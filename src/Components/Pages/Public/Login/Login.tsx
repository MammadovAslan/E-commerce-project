import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import SocialsLogin from "./SocialsLogin/SocialsLogin";
import { axiosInstance } from "../../../../api/axios";
import { useSelector } from "react-redux";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [logedIn, setLogedIn] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const { auth } = useSelector((state: any) => state.auth);

  //*------------------Login function---------------------
  const login = async (email: string) => {
    try {
      const data = await axiosInstance.post(`/email-token`, {
        email,
        base_url: "https://tello-ecommerce.vercel.app/token",
      });
    } catch (error) {
      console.log(error);
    } finally {
      window.scrollTo(0, 0);
      setLogedIn(true);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    login(email);
  };

  if (auth) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      {logedIn ? (
        <div className="check-email">
          {/* Success message */}
          <img src="images/login/undraw_Mail_sent_re_0ofv (1) 1.svg" />
          <p className="check-email-text">E - poçt ünvanınızı yoxlayın.</p>
        </div>
      ) : (
        <div className="login">
          <div className="login-form">
            {/* Login form */}
            <h4 className="login-title">Daxil ol</h4>
            <SocialsLogin />
            <form onSubmit={submitHandler}>
              <label className="login-label">
                E-mail <br />
                <input
                  type="email"
                  placeholder="nümunə@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="login-label password">
                Şifrə <br />
                <input type={passwordType} placeholder="Şifrənizi daxil edin" />
                <p className="toggle-password" onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </p>
              </label>
              <Link to="" className="forgot-password-link">
                Şifrəni unutmusunuz?
              </Link>
              <button className="login-button main-button">Daxil ol</button>
            </form>
          </div>
          <div className="login-image">
            <img src="images/login/Dot Grid.svg" className="image-grid" />
            <img src="images/login/undraw_mobile_devices_k1ok 1.svg" />
            <p className="login-signup">
              Hesabınız yoxdur? <Link to="/signup">Qeydiyyatdan keçin</Link>{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
