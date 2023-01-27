import React from "react";

interface HistoryItem {
  name: string;
  setToggleHistory: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue:React.Dispatch<React.SetStateAction<string>>
  searchRef:any
}

const HistoryItem = (props: HistoryItem) => {
  const onclickHandler = () => {
    props.searchRef.current.value = props.name
    props.setSearchValue(props.name)
    props.setToggleHistory(false);
  };
  return (
    <button className="history-item" onClick={onclickHandler}>
      {props.name}
    </button>
  );
};

export default HistoryItem;
