import React from "react";

interface PriceProps {
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
  min: number | string;
  max: number | string;
}

const PriceFIlter = ({ max, min, setMax, setMin }: PriceProps) => {
  return (
    <div className="price-filter">
      <label>
        Min
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Minimum qiymət"
        />
      </label>

      <label>
        Max
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          placeholder="Maksimum qiymət"
        />
      </label>
    </div>
  );
};

export default PriceFIlter;
