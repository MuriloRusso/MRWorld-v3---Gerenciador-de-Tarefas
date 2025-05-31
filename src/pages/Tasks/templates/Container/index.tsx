import { Box, Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";

export default function Container() {
    return (
        <Box sx={{paddingX: 10, paddingY: 5, width: "calc(100% - 417px)"}}>
            <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <ButtonNew/>
            </Grid>
        </Box>
    )
}