import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={5}>
      <Stack direction="row" spacing={2}>
        <TextField label="Text Field" variant="outlined" />
        <TextField label="Text Field" variant="filled" />
        <TextField label="Text Field" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" label="input" />
        <TextField
          label="password"
          helperText="Don't Share your password with anyone"
          inputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
