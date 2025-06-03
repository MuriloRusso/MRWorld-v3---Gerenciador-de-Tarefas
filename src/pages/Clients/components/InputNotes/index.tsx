import { Box, Typography } from "@mui/material";
import RichTextEditor from "../../../../components/RichTextEditor";
import Label from "../../../../components/Label";

export default function InputNotes(){
    return (
        <Box>
            <Label text={"Anotações"} />
            <RichTextEditor/>
        </Box>
    )
}