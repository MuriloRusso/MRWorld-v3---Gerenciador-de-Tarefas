import InputMask from "react-input-mask";
import { Box, SxProps, TextField } from "@mui/material";
import Label from "../Label";
import { Theme } from "@emotion/react";
// import Input from "../Input";

type MaskedInputProps = {
  id?: string;
  mask: string;
  label?: string;
  value: string;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  required?: boolean;
  sx?: SxProps<Theme>;
}

export default function MasketInputLabel({ id, mask, label, value, error, errorText, onChange, placeholder, required, sx }:MaskedInputProps) {
  const borderColor = "#f00";
  return (
    <Box sx={sx}>
      {/* <Label text={label}/> */}
      <InputMask
        id={id}
        mask={mask}
        value={value}
          onChange={(e) => onChange(e.target.value)}
      >
        {(inputProps) => (
          <TextField
            {...inputProps}
            // label={label}
            variant="outlined"
            value={value}
            placeholder={placeholder}
            error={error}
            errorText={errorText}
            required={required}
            sx={{width: "100%", minWidth: 40, borderRadius: '8px', borderColor: error ? borderColor : "#000", backgroundColor: "#fff"}}
            fullWidth
          />
        )}
      </InputMask>        
    </Box>
  );
}
