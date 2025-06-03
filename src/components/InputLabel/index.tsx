import { Box, Typography } from "@mui/material";
import Input from "../Input";
import Label from "../Label";

    export default function InputLabel({label}:{label: string}){
        return(
            <Box>
                <Label text={label}/>
                <Input onChange={()=>{}} value="" placeholder="Digite o nome da Empresa/Cliente"/>
            </Box>
        )
    }