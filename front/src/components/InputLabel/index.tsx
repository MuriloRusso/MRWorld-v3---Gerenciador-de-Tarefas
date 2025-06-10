import { Box, Typography } from "@mui/material";
import Input from "../Input";
import Label from "../Label";

type InputLabelProps = {
    label?: string;
    value: string;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
    required?: boolean;
    onChange: (newValue: string) => void;
}

export default function InputLabel({label, value, placeholder, error, errorText, required, onChange}:InputLabelProps){
    return(
        <Box>
            <Label text={label}/>
            <Input
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