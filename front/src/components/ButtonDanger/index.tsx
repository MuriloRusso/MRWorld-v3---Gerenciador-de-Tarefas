import { Button, SxProps, Theme } from "@mui/material";

type ButtonProps = {
    value?: string;
    onClick?: () => void;
    sx?: SxProps<Theme>;
    Icon? : React.ElementType;
    id?: string;
}

export default function ButtonDanger({value, onClick, sx, Icon, id}:ButtonProps){
    return (
        <Button
            variant="text"
            onClick={onClick ? onClick : () => {}}
            sx={{
                backgroundColor: "#b3261e",
                color: "#fff",
                height: '40px',
                borderWidth: 1,
                borderColor: "#b3261e",
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