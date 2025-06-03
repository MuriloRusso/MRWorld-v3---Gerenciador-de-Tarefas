import { Box, Typography } from "@mui/material";
import InputFile from "../../../../components/InputFile";
import Label from "../../../../components/Label";

export default function InputLogo(){
    return (
        <Box>
            <Label text={"Logo"} />
            <InputFile/>
        </Box>
    )
    
    
}