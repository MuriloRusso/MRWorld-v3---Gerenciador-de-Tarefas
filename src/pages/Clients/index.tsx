import { Grid } from "@mui/material";
import Menu from "../../components/Menu";
import Container from "./templates/Container";
import ModalCreateUpdate from "./templates/ModalCreateUpdate";

export default function Clients(){
    return (
        <Grid sx={{display: "flex", flexDirection: "row"}}>
            <Menu/>
            <Container/>
            <ModalCreateUpdate/>
        </Grid>
    )
}