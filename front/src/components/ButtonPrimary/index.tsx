import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
    value: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
}

export default function ButtonPrimary({value, onClick, sx}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{ backgroundColor: "#000", color: "#fff", height: '40px', borderWidth: 1, borderColor: "#000", borderStyle: "solid", ...sx}}
        >                
        {value}                
        </Button>
    )
}