import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialsLogin = () => {
  return (
    <>
        <div className="login-socials">
          <div className="login-facebook">
            <span className="social-icon facebook-icon">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </span>
            <p className="facebook-login-text">Facebook ilə</p>
          </div>
          <div className="login-google">
            <span className="social-icon google-icon">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </span>
            <p className="google-login-text">Facebook ilə</p>
          </div>
        </div>
        <span>və ya</span>
    </>
  )
}

export default SocialsLogin