import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputEmail({fieldsData, handleChange}: {fieldsData: ClientData;  handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel
            label={fieldsData.email.label}
            value={fieldsData.email.value}
            placeholder={fieldsData.email.placeholder}
            error={fieldsData.email.error}
            errorText={fieldsData.email.errorText}
            required={fieldsData.email.required}
            onChange={(newValue:string) => handleChange('email', newValue)}
        />
    )
}