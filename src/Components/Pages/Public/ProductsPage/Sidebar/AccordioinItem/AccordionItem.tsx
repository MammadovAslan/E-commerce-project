import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

interface AccordionItemProps {
  slug: string;
  name: string;
  type: string;
  params: string[];
  setParams: React.Dispatch<React.SetStateAction<string[]>>;
}

const AccordionItem = (props: AccordionItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkRef = useRef<any>();

  //*--------------Set "checked" after page refresh-----------------
  useEffect(() => {
    if (searchParams.get(`${props.type}`)?.split(" ").includes(props.slug)) {
      checkRef.current.checked = true;
    } else {
      checkRef.current.checked = false;
    }
  }, [searchParams.get(`${props.type}`)]);

  //*---------------Delete searchParams---------------------------
  useEffect(() => {
    if (props.params.length === 0) {
      searchParams.delete(`${props.type}`);
      setSearchParams(searchParams);
    }
  }, []);

  //*------------------Add searchParams to appropriate state------------
  const onclickHandler = () => {
    if (!checkRef.current.checked) {
      !props.params.includes(props.slug) && props.setParams([...props.params, props.slug]);
    } else {
      props.setParams(
        props.params.filter((el: string) => {
          if (el !== props.slug) {
            return el;
          }
        })
      );
    }
  };

  return (
    <div className="checkbox-container">
      <input
        ref={checkRef}
        type="checkbox"
        className="filter-checkbox"
        id={`${props.slug}-checkbox`}
      />
      <label
        htmlFor={`${props.slug}-checkbox`}
        className="custom-brand-checkbox"
        onClick={onclickHandler}
      ></label>
      <label htmlFor={`${props.slug}-checkbox`} onClick={onclickHandler}>
        {props.name}
      </label>
    </div>
  );
};

export default AccordionItem;
