import { Grid, Typography } from "@mui/material";
import InputNamePerson from "../../components/InputName";
import InputName from "../../components/InputName";

export default function Form(){
    return (
        <Grid>
            <Typography variant="h3" component="h3">Criar Pessoa</Typography>
            <InputName/>
        </Grid>
    )
}