import { Box, Typography } from "@mui/material";

export default function Menu () {
    return (
        <Box sx={{paddingY: 1, fontWeight: 500, minWidth: 256, maxWidth: '25%', height: "100vh", borderRight: "#E0E0E0", borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Box sx={{paddingX: 1}}>
                <Typography component='h1' variant='h1' sx={{fontSize: 20}}>MRWorld</Typography>
            </Box>
        </Box>
    )
}