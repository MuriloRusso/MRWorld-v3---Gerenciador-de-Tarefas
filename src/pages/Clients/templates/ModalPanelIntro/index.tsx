import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";
import { ClientData } from "../../../../types/client";

export default function ModalPanelIntro({fieldsData}: {fieldsData: ClientData}){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <InputName fieldsData={fieldsData}/>
            <InputLogo/>
        </Grid>
    )
}