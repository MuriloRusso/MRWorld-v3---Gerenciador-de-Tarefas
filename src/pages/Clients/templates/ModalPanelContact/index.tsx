import { Grid } from "@mui/material";
import InputLabel from "../../../../components/InputLabel";

export default function ModalPanelContact(){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            <InputLabel label="Nome do dono" />
            <InputLabel label="Telefone" />
            <InputLabel label="E-mail" />
        </Grid>
    )
}