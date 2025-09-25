import { TextField } from "@mui/material";

type InputProps = {
    id?: string;
    value: string;
    error?: boolean;
    errorText?: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
    required?: boolean;
    label?: string;
}

export default function Input({id, value, error, errorText, onChange, placeholder, required, label}:InputProps){
    const borderColor = "#f00";
    return (
        <TextField
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            label={label}
            error={error}
            helperText={error ? errorText : ""}
            required={required}
            placeholder={placeholder}
            sx={{width: "100%", minWidth: 40, borderRadius: '8px', borderColor: error ? borderColor : "#000", backgroundColor: "#fff"}}
        />
    )
}