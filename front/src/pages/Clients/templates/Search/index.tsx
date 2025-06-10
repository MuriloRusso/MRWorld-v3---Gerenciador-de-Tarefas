import { Grid } from "@mui/material";
import InputSearch from "../../components/InputSearch";
import ButtonSearch from "../../components/ButtonSearch";

export default function Search(){
    return(
        <Grid sx={{display: 'flex', flexDirection: "row", gap: 1, maxWidth: 400, alignItems: 'center'}}>
            <InputSearch/>
            <ButtonSearch/>
        </Grid>
    )
}