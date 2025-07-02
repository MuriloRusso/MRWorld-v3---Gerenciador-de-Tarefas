import { Grid } from "@mui/material";
import InputLabel from "../../../../components/InputLabel";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";
import { ClientData } from "../../../../types/client";

export default function ModalPanelContact({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            <InputPhone fieldsData={fieldsData} handleChange={handleChange}/>
            <InputEmail fieldsData={fieldsData} handleChange={handleChange}/>
        </Grid>
    )
}