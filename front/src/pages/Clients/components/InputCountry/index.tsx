import Input from "../../../../components/Input";
import { ClientData } from "../../../../types/client";

export default function InputCountry({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Input
            label={fieldsData.country.label}
            value={fieldsData.country.value}
            placeholder={fieldsData.country.placeholder}
            error={fieldsData.country.error}
            errorText={fieldsData.country.errorText}
            required={fieldsData.country.required}
            onChange={(newValue:string) => handleChange('country', newValue)}
        />
    )
}