import Input from "../../../../components/Input";
import { ClientData } from "../../../../types/client";

export default function InputName({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Input
            id="input-name-client"
            label={fieldsData.name.label}
            value={fieldsData.name.value}
            placeholder={fieldsData.name.placeholder}
            error={fieldsData.name.error}
            errorText={fieldsData.name.errorText}
            required={fieldsData.name.required}
            onChange={(newValue:string) => handleChange('name', newValue)}
        />
    )
}