import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";
import { ClientData } from "../../../../types/client";
import InputCNPJ from "../../components/InputCNPJ";

type ModalPanelIntroProps =  {
    fieldsData: ClientData;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    handleChangeFile: (fieldName: keyof ClientData, newValue: File) => void;
}

export default function ModalPanelIntro({fieldsData, handleChange, handleChangeFile}:ModalPanelIntroProps){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <InputLogo fieldsData={fieldsData} handleChange={handleChangeFile}/>
            <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <InputName fieldsData={fieldsData} handleChange={handleChange}/>
                <InputCNPJ fieldsData={fieldsData} handleChange={handleChange}/>
            </Grid>
        </Grid>
    )
}