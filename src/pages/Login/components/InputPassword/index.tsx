import Input from "../../../../components/Input";
import { inputProps } from "../../../../types/input";
import { LoginFields } from "../../../../types/login";

type InputUserProps = {
    passwordField: inputProps;
    handleLoginFieldChange: (field: keyof LoginFields, newValue: string) => void;
}

export default function InputPassword({passwordField, handleLoginFieldChange}:InputUserProps) {
    const changeValue = (newValue:string) => {
        handleLoginFieldChange('passwordField', newValue);
    }
    return (
        <Input
            value={passwordField.value}
            placeholder={passwordField.placeholder}
            error={passwordField.error}
            errorText={passwordField.errorText}
            required={passwordField.required}
            onChange={changeValue}
        />
    )
}