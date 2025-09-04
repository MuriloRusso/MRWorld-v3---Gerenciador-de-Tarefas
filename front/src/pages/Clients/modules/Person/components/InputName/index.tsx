import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

export default function InputName({fieldsData, handleChange}: {fieldsData: PersonData; handleChange: (fieldName: keyof PersonData, newValue: string) => void;}) {
    return (
        <InputLabel 
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