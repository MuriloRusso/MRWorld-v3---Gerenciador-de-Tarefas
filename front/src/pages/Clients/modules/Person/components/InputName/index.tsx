import Input from "../../../../../../components/Input";
import { PersonData } from "../../../../../../types/person";

type InputNameProps  = {
    props: {
        fieldsPersonData: PersonData;
        handleChange: (fieldName: keyof PersonData, newValue: string) => void;
    }
}

export default function InputName({props}:InputNameProps) {
    return (
        <Input
            label={props.fieldsPersonData.name.label}
            value={props.fieldsPersonData.name.value}
            placeholder={props.fieldsPersonData.name.placeholder}
            error={props.fieldsPersonData.name.error}
            errorText={props.fieldsPersonData.name.errorText}
            required={props.fieldsPersonData.name.required}
            onChange={(newValue:string) => props.handleChange('name', newValue)}
        />
    )
}