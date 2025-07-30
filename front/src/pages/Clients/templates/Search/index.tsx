import { Grid } from "@mui/material";
import InputSearch from "../../components/InputSearch";
import ButtonSubmitSearch from "../../components/ButtonSubmitSearch";

export default function Search({search, handleChangeSearch, getListSearch}:{search: string, handleChangeSearch: (e: string) => void, getListSearch: () => void}){
    return(
        <Grid sx={{display: 'flex', flexDirection: "row", gap: 1, maxWidth: '100%', width: 400, alignItems: 'center'}}>
            <InputSearch search={search} handleChangeSearch={handleChangeSearch}/>
            <ButtonSubmitSearch getListSearch={getListSearch}/>
        </Grid>
    )
}