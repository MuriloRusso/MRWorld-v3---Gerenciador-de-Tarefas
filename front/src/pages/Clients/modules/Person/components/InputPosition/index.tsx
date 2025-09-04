import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

export default function InputPosition({fieldsData, handleChange}: {fieldsData: PersonData; handleChange: (fieldName: keyof PersonData, newValue: string) => void;}) {
    return (
        <InputLabel 
            label={fieldsData.position.label}
            value={fieldsData.position.value}
            placeholder={fieldsData.position.placeholder}
            error={fieldsData.position.error}
            errorText={fieldsData.position.errorText}
            required={fieldsData.position.required}
            onChange={(newValue:string) => handleChange('position', newValue)}
        />
    )
}