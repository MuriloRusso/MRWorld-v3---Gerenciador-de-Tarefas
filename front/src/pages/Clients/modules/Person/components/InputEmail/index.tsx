import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

export default function InputEmail({fieldsData, handleChange}: {fieldsData: PersonData; handleChange: (fieldName: keyof PersonData, newValue: string) => void;}) {
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