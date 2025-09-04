import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

export default function InputPhone({fieldsData, handleChange}: {fieldsData: PersonData; handleChange: (fieldName: keyof PersonData, newValue: string) => void;}) {
    return (
        <InputLabel 
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