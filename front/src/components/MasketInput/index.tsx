import React from "react";
import InputMask from "react-input-mask";
import { SxProps, TextField } from "@mui/material";
import Input from "../Input";
import { Theme } from "@emotion/react";

type InputProps = {
  id?: string;
  mask: string;
  value: string;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  required?: boolean;
  sx?: SxProps<Theme>;
  label?: string;
}

export default function MaskedInput({ id, mask, value, error, errorText, onChange, placeholder, required, sx, label }:InputProps) {
  const borderColor = "#f00";
  return (
    <InputMask
      id={id ?? ""}
      mask={mask}
      value={value}
        onChange={(e) => onChange(e.target.value)}
    >
      {(inputProps) => (
        <TextField
          label={label}
          {...inputProps}
          // variant="outlined"
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
  );
}
