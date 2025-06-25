import { Grid } from "@mui/material";
import ListPerson from "../ListPerson";

export default function ModalPanelPerson(){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            <ListPerson/>
        </Grid>
    )
}