import { NavLink } from "react-router-dom";
import { setToken, setCustomerId, setAuth } from "../../../../../redux/reducer/authReducer";
import { useDispatch } from "react-redux";

// *----------MUI icons--------------------
import {
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const ProfileSidebar = () => {
  const dispatch = useDispatch();

  //* ----------Logout---------------------
  const logout = () => {
    localStorage.clear();
    dispatch(setToken(""));
    dispatch(setCustomerId(""));
    dispatch(setAuth(false));
  };

  return (
    <div className="profile-sidebar">
      <h5 className="profile-sidebar-title">Profilim</h5>

      <ul className="profile-sidebar-list">
        <li>
          <NavLink to="orders">
            <ShoppingCartOutlined /> <span className="icon-text"> Sifarişlərim</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="profile">
            <PersonOutlineOutlined /> <span className="icon-text">Şəxsi məlumatlar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="Adresses">
            <LocationOnOutlinedIcon /> <span className="icon-text">Çatdırılma ünvanı</span>
          </NavLink>
        </li>
        <li onClick={logout}>
          <NavLink to="/login">
            <LogoutOutlinedIcon /> <span className="icon-text"> Çıxış</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
