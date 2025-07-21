import { Grid } from "@mui/material";
import InputSearch from "../../components/InputSearch";
import ButtonSubmitSearch from "../../components/ButtonSubmitSearch";

export default function Search({search, handleSearch}:{search: string, handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void}){
    return(
        <Grid sx={{display: 'flex', flexDirection: "row", gap: 1, maxWidth: '100%', width: 400, alignItems: 'center'}}>
            <InputSearch search={search} handleSearch={handleSearch}/>
            <ButtonSubmitSearch/>
        </Grid>
    )
}