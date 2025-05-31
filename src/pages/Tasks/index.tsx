import { Grid } from "@mui/material";
import Menu from "../../components/Menu";

export default function Tasks(){
    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
        </Grid>
    )
}