import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputCity({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel 
            label={fieldsData.city.label}
            value={fieldsData.city.value}
            placeholder={fieldsData.city.placeholder}
            error={fieldsData.city.error}
            errorText={fieldsData.city.errorText}
            required={fieldsData.city.required}
            onChange={(newValue:string) => handleChange('city', newValue)}
        />
    )
}