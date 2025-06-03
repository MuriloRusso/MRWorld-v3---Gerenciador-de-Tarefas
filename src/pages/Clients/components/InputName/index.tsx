import { Box, Typography } from "@mui/material";
import Input from "../../../../components/Input";
import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputName({fieldsData}: {fieldsData: ClientData}){
    return (
        <InputLabel 
            label={fieldsData.name.label}
            value={fieldsData.name.value}
            placeholder={fieldsData.name.placeholder}
            error={fieldsData.name.error}
            errorText={fieldsData.name.errorText}
            required={fieldsData.name.required}
        />
    )
}