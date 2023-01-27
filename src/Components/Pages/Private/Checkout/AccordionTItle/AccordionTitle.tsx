import React from "react";
interface Props {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccordionTitle = (props: Props) => {
  return (
    <div
      className="accordion-title"
      onClick={() => {
        props.setExpand((prev) => !prev);
      }}
    >
      {" "}
      <div className="accordion-item-title">{props.text}</div>{" "}
      <div className="checkbox-button-section">
        <div className="accordion-custom-checkbox">
          <input
            className="accordion-checkbox"
            type="checkbox"
            id="details-chechbox"
            checked={props.state}
            readOnly
          />
          <label
            className={`accordion-checkbox-label ${props.expand ? "expanded" : ""}`}
            htmlFor="details-chechbox"
          ></label>
        </div>
        {props.state && (
          <button
            className="chenge-button"
            onClick={(e) => {
              props.setState(false);
              e.stopPropagation();
              props.setExpand(true);
            }}
          >
            Düzəliş et
          </button>
        )}
      </div>
    </div>
  );
};

export default AccordionTitle;
