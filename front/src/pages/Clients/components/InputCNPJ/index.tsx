import { Box } from "@mui/material";
import InputLabel from "../../../../components/InputLabel";
import MaskedInput from "../../../../components/MasketInput";
import { ClientData } from "../../../../types/client";
import Label from "../../../../components/Label";
import MasketInputLabel from "../../../../components/MasketInputLabel";


export default function InputCNPJ({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <MasketInputLabel
            mask="99.999.999/9999-99"
            label={fieldsData.cnpj.label}
            value={fieldsData.cnpj.value}
            placeholder={fieldsData.cnpj.placeholder}
            error={fieldsData.cnpj.error}
            errorText={fieldsData.cnpj.errorText}
            required={fieldsData.cnpj.required}
            onChange={(newValue:string) => handleChange('cnpj', newValue)}
        />
    )
}