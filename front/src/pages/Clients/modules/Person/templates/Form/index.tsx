import { Grid, Typography } from "@mui/material";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";
import InputPosition from "../../components/InputPosition";
import InputFunction from "../../components/InputFunction";

export default function Form(){

    const {fieldsPersonData, handleChangePerson} = useFields();

    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <InputName fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            <InputPhone fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            <InputEmail fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            <InputPosition fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            <InputFunction fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
        </Grid>
    )
}