import { Box, Typography } from "@mui/material";
import RichTextEditor from "../../../../components/RichTextEditor";
import Label from "../../../../components/Label";

export default function InputNotes({fieldsData, handleChange}:{fieldsData: any, handleChange: any}){
    return (
        <Box>
            <Label text={"Anotações"} />
            <RichTextEditor value={fieldsData.notes.value} onChange={(value) => handleChange("notes", value)}/>
        </Box>
    )
}