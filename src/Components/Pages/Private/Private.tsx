import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProfileSidebar from "./Profile/ProfileSidebar/ProfileSidebar";

const Private = () => {
  const { auth } = useSelector((state: any) => state.auth);
  return (
    <>
      {auth ? (
        <div className="private-pages">
          <ProfileSidebar />
            <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Private;
