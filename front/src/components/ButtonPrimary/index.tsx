import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
    value?: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    Icon? : React.ElementType;
    id?: string;
}

export default function ButtonPrimary({value, onClick, sx, Icon, id}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                height: '40px',
                borderWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                gap: 1,
                alignItems: 'center',
                ...sx
            }}
            id={id ?? ""}
        >
            {Icon && <Icon/>}
            {value && value}
        </Button>
    )
}