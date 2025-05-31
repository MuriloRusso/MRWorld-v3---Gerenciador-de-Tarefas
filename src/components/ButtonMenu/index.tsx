import { Button } from "@mui/material";


type ButtonMenuProps = {
    Icon: any;
    text: string;
    link?: string;
}

export default function ButtonMenu({Icon, text, link}:ButtonMenuProps){
    return(
        <Button variant="outlined" startIcon={<Icon />}>
            {text}
        </Button>
    )

}