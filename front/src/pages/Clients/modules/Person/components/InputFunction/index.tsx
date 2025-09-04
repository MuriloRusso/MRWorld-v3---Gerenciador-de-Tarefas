import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

export default function InputFunction({fieldsData, handleChange}: {fieldsData: PersonData; handleChange: (fieldName: keyof PersonData, newValue: string) => void;}) {
    return (
        <InputLabel 
            label={fieldsData.function.label}
            value={fieldsData.function.value}
            placeholder={fieldsData.function.placeholder}
            error={fieldsData.function.error}
            errorText={fieldsData.function.errorText}
            required={fieldsData.function.required}
            onChange={(newValue:string) => handleChange('function', newValue)}
        />
    )
}