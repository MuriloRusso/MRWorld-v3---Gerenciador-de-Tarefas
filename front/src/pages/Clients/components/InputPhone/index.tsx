import MaskedInput from "../../../../components/MasketInput";
import { ClientData } from "../../../../types/client";

export default function InputPhone({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <MaskedInput
            mask="(99) 99999-9999"
            label={fieldsData.phone.label}
            value={fieldsData.phone.value}
            placeholder={fieldsData.phone.placeholder}
            error={fieldsData.phone.error}
            errorText={fieldsData.phone.errorText}
            required={fieldsData.phone.required}
            onChange={(newValue:string) => handleChange('phone', newValue)}
        />
    )
}