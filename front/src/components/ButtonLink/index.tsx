import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
    value?: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    Icon? : React.ElementType;
    id?: string;
}

export default function ButtonLink({value, onClick, sx, Icon, id}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{
                color: "#0b57d0",
                height: '40px',
                border: '1px solid transparent',
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