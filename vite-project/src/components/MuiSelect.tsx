import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountries(event.target.value as string);
  };
  return (
    <Box width="250px">
      <TextField
        select
        label="Select Country"
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">US</MenuItem>
        <MenuItem value="AU">AU</MenuItem>
      </TextField>
    </Box>
  );
};
