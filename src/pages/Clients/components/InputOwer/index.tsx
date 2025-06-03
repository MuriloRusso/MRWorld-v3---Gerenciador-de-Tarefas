import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputOwer({fieldsData, handleChange}: {fieldsData: ClientData;  handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel 
            label={fieldsData.ower.label}
            value={fieldsData.ower.value}
            placeholder={fieldsData.ower.placeholder}
            error={fieldsData.ower.error}
            errorText={fieldsData.ower.errorText}
            required={fieldsData.ower.required}
            onChange={(newValue:string) => handleChange('ower', newValue)}
        />
    )
}