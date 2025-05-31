import { Box, Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import List from "../List";

export default function Container() {
    return (
        <Box sx={{paddingX: 10, paddingY: 5, width: "calc(100% - 417px)", display: 'flex', flexDirection: 'column', gap: 5}}>
            <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <ButtonNew/>
            </Grid>
            <List/>
        </Box>
    )
}