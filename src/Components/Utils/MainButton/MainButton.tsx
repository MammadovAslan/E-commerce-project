import React from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  width: string;
  text: string;
}

const MainButton = (props: Props) => {
  return (
    <Link to={props.link} className="main-button" style={{ width: `${props.width}px` }}>
      {props.text}
    </Link>
  );
};

export default MainButton;
