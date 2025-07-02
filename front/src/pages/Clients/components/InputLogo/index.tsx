import { Box, Typography } from "@mui/material";
import InputFile from "../../../../components/InputFile";
import Label from "../../../../components/Label";

export default function InputLogo(){
    return (
        <Box sx={{ borderRight: "1px solid #ccc", paddingRight: '30px'}}>
            <Label text={"Logo"} />
            <InputFile/>
        </Box>
    )
    
    
}