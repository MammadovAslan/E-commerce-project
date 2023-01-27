import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router-dom";

import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectOrder = () => {
  const [order, setOrder] = useState<any>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(event.target.value as string);
  };

  useEffect(() => {
    order !== "" && searchParams.set("order", order);
    order === "none" && searchParams.delete("order");
    setSearchParams(searchParams);
  }, [order, searchParams]);

  useEffect(() => {
    searchParams.get("order") && setOrder(searchParams.get("order"));
  }, []);

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sıralama</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            label="Sıralama"
            onChange={handleChange}
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            <MenuItem value="asc">Bahadan ucuza</MenuItem>
            <MenuItem value="desc">Ucuzdan bahaya</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectOrder;
