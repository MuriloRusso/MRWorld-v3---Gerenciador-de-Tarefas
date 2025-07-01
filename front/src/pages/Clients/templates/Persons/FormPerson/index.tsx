import { Grid, Typography } from "@mui/material";
import InputNamePerson from "../../../components/Persons/InputNamePerson";

export default function FormPerson(){
    return (
        <Grid>
            <Typography variant="h3" component="h3">Criar Pessoa</Typography>
            <InputNamePerson />
        </Grid>
    )
}