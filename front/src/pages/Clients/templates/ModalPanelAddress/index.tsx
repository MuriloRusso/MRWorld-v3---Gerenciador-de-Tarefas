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
import ButtonSearchCep from "../../components/ButtonSearchCep";
import useSearchCep from "../../hooks/useSearchCep";

export default function ModalPanelAddress({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    
    const { getAddress } = useSearchCep();

    const handleSearchCep =  () => {
        getAddress(fieldsData.cep.value);
    }

    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <Grid sx={{display: 'flex', flexDirection: 'row'}}>
                <InputCep fieldsData={fieldsData} handleChange={handleChange}/>
                <ButtonSearchCep handleSearchCep={handleSearchCep}/>
            </Grid>
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