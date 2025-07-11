import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";

export default function Tasks(){
    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container/>
        </Grid>
    )
}