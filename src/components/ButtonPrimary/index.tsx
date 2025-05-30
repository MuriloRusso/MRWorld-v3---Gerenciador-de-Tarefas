import { Button } from "@mui/material";

type ButtonProps = {
    value: string;
    onClick?: () => void;
}

export default function ButtonPrimary({value, onClick}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{backgroundColor: "#000", color: "#fff", height: '40px'}}
        >                
        {value}                
        </Button>
    )
}