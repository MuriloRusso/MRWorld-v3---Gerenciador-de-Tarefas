import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";

export default function ModalPanelIntro(){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <InputName/>
            <InputLogo/>
        </Grid>
    )
}