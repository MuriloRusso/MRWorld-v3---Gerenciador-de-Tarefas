import { Grid } from "@mui/material";
import InputLabel from "../../../../components/InputLabel";
import InputOwer from "../../components/InputOwer";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";
import { ClientData } from "../../../../types/client";

export default function ModalPanelContact({fieldsData}: {fieldsData: ClientData}){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            <InputOwer fieldsData={fieldsData}/>
            <InputPhone fieldsData={fieldsData}/>
            <InputEmail fieldsData={fieldsData}/>
        </Grid>
    )
}