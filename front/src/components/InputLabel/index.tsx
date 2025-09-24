import { Box, SxProps, Typography } from "@mui/material";
import Input from "../Input";
import Label from "../Label";
import { Theme } from "@emotion/react";

type InputLabelProps = {
    id?: string;
    label?: string;
    value: string;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
    required?: boolean;
    onChange: (newValue: string) => void;
    sx?: SxProps<Theme>;
}

export default function InputLabel({id, label, value, placeholder, error, errorText, required, onChange, sx}:InputLabelProps){
    return(
        <Box sx={sx}>
            <Label text={label}/>
            <Input
                id={id}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                error={error}
                errorText={errorText}
                required={required}
            />
        </Box>
    )
}