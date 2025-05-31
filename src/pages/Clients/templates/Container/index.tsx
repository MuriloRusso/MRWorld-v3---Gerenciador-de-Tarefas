import { Box, Grid, Typography } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import List from "../List";
import Search from "../Search";

export default function Container() {
    return (
        <Box sx={{paddingX: 10, width: "calc(100% - 417px)", display: 'flex', flexDirection: 'column', gap: 2, height: '100vh', backgroundColor: "#efefef"}}>
            <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginY: 5}}>
                <ButtonNew/>
            </Grid>
            <Typography variant="h2" component="h2" sx={{fontSize: 25}}>Empresas/Clientes</Typography>
            <Search/>
            <List/>
        </Box>
    )
}