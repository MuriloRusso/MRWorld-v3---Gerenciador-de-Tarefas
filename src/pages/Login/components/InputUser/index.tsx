import Input from "../../../../components/Input";
import { inputProps } from "../../../../types/input";
import { LoginFields } from "../../../../types/login";

type InputUserProps = {
    userField: inputProps;
    handleLoginFieldChange: (field: keyof LoginFields, newValue: string) => void;
}

export default function InputUser({userField, handleLoginFieldChange}:InputUserProps) {
    const changeValue = (newValue:string) => {
        handleLoginFieldChange('userField', newValue);
    }
    return (
        <Input
            value={userField.value}
            placeholder={userField.placeholder}
            error={userField.error}
            errorText={userField.errorText}
            required={userField.required}
            onChange={changeValue}
        />
    )
}