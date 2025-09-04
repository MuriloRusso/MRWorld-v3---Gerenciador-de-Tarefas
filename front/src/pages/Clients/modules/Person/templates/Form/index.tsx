import { Grid, Typography } from "@mui/material";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";
import InputPhone from "../../components/InputPhone";

export default function Form(){

    const {fieldsPersonData, handleChangePerson} = useFields();

    return (
        <Grid>
            <InputName fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            <InputPhone fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
        </Grid>
    )
}