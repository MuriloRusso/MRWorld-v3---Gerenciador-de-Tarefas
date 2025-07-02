import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";
import { ClientData } from "../../../../types/client";
import InputCNPJ from "../../components/InputCNPJ";

export default function ModalPanelIntro({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <InputLogo/>
            <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <InputName fieldsData={fieldsData} handleChange={handleChange}/>
                <InputCNPJ fieldsData={fieldsData} handleChange={handleChange}/>
            </Grid>
        </Grid>
    )
}