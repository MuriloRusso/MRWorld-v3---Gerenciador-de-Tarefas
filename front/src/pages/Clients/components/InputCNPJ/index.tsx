import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputCNPJ({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel 
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