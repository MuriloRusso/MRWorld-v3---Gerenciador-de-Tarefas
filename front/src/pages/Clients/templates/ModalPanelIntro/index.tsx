import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";
import { Client, ClientData } from "../../../../types/client";
import InputCNPJ from "../../components/InputCNPJ";
import InputClientBy from "../../components/InputClientBy";

type ModalPanelIntroProps =  {
    fieldsData: ClientData;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    handleChangeFile: (fieldName: keyof ClientData, newValue: File) => void;
    clients: Client[];
}

export default function ModalPanelIntro({fieldsData, handleChange, handleChangeFile, clients}:ModalPanelIntroProps){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 5}}>
            <InputLogo fieldsData={fieldsData} handleChange={handleChangeFile}/>
            <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <InputName fieldsData={fieldsData} handleChange={handleChange}/>
                <InputCNPJ fieldsData={fieldsData} handleChange={handleChange}/>
                <InputClientBy fieldsData={fieldsData} handleChange={handleChange} options={clients} />
            </Grid>
        </Grid>
    )
}