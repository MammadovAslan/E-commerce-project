import React from "react";
import HistoryItem from "./HistoryItem/HistoryItem";

interface SearchHistoryI {
  historyArray: string[];
  setHistoryArray: React.Dispatch<React.SetStateAction<string[]>>;
  setToggleHistory:React.Dispatch<React.SetStateAction<boolean>>
  setSearchValue:React.Dispatch<React.SetStateAction<string>>
  searchRef:any
}

const SearchHistory = (props: SearchHistoryI) => {
  return (
    <div className="search-history">
      <div className="history-title">
        <h4 className="search-results">Son axtarışlar</h4>
        <button
          className="clear-history"
          onClick={() => {
            props.setHistoryArray([]);
          }}
        >
          Təmizlə
        </button>
      </div>
      <div className="history-search-result">
        {props.historyArray.map((el: string, i: number) => (
          <HistoryItem key={i} name={el} setSearchValue={props.setSearchValue} searchRef={props.searchRef} setToggleHistory={props.setToggleHistory}/>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
