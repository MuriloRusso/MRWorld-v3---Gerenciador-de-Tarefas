import { Grid } from "@mui/material";
import InputName from "../../components/InputName";
import InputLogo from "../../components/InputLogo";
import { ClientData } from "../../../../types/client";
import InputCNPJ from "../../components/InputCNPJ";
import InputCep from "../../components/InputCep";
import InputAddress from "../../components/InputAddress";
import InputAddressNumber from "../../components/InputAddressNumber";
import InputCity from "../../components/InputCity";
import InputCountry from "../../components/InputCountry";
import InputState from "../../components/InputState";

export default function ModalPanelAddress({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <InputCep fieldsData={fieldsData} handleChange={handleChange}/>
            <Grid sx={{display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'space-between', gap: 2}}>
                <InputAddress fieldsData={fieldsData} handleChange={handleChange}/>
                <InputAddressNumber fieldsData={fieldsData} handleChange={handleChange}/>
                <InputCity fieldsData={fieldsData} handleChange={handleChange}/>
                <InputState fieldsData={fieldsData} handleChange={handleChange}/>
                <InputCountry fieldsData={fieldsData} handleChange={handleChange}/>
            </Grid>
        </Grid>
    )
}