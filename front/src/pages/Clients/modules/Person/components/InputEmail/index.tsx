import InputLabel from "../../../../../../components/InputLabel";
import { PersonData } from "../../../../../../types/person";

type InputEmailProps = {
    props: {
        fieldsPersonData: PersonData;
        handleChange: (fieldName: keyof PersonData, newValue: string) => void;
    }
}
export default function InputEmail({props}:InputEmailProps) {
    return (
        <InputLabel 
            label={props.fieldsPersonData.email.label}
            value={props.fieldsPersonData.email.value}
            placeholder={props.fieldsPersonData.email.placeholder}
            error={props.fieldsPersonData.email.error}
            errorText={props.fieldsPersonData.email.errorText}
            required={props.fieldsPersonData.email.required}
            onChange={(newValue:string) => props.handleChange('email', newValue)}
        />
    )
}