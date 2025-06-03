import { Grid } from "@mui/material";
import InputLabel from "../../../../components/InputLabel";
import InputOwer from "../../components/InputOwer";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";

export default function ModalPanelContact(){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            <InputOwer/>
            <InputPhone/>
            <InputEmail/>
        </Grid>
    )
}