import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
const BreadCrump = () => {
  const [breadcrumb, setBreadcrumb] = useState<string[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setBreadcrumb(window.location.pathname.replace("/", "").replaceAll("%20", "-").split("/"));
    window.scrollTo(0, 0)
  }, [navigate]);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
      <Link to="/" className="breandcrumb-link">
        Home
      </Link>
      {breadcrumb &&
        breadcrumb.map((el: string, i: number) => {
          if (i !== breadcrumb.length - 1) {
            return (
              <Link key={i} to={`/${el}`} className="breandcrumb-link">
                {el[0].toUpperCase() + el.slice(1)}
              </Link>
            );
          } else {
            return (
              <Typography key={i} className="breandcrumb-current-link">
                {el[0].toUpperCase() + el.slice(1)}
              </Typography>
            );
          }
        })}
    </Breadcrumbs>
  );
};

export default BreadCrump;
