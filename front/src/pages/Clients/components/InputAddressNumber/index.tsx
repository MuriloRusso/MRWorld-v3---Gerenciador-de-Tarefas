import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputAddressNumber({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel 
            label={fieldsData.address_number.label}
            value={fieldsData.address_number.value}
            placeholder={fieldsData.address_number.placeholder}
            error={fieldsData.address_number.error}
            errorText={fieldsData.address_number.errorText}
            required={fieldsData.address_number.required}
            onChange={(newValue:string) => handleChange('address_number', newValue)}
        />
    )
}