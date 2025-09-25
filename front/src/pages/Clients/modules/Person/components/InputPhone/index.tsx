import Input from "../../../../../../components/Input";
import { PersonData } from "../../../../../../types/person";

type InputPhoneProps = {
  props: {
    fieldsPersonData: PersonData;
    handleChange: (fieldName: keyof PersonData, newValue: string) => void;
  };
};

export default function InputPhone({ props }: InputPhoneProps) {
  return (
    <Input
      label={props.fieldsPersonData.phone.label}
      value={props.fieldsPersonData.phone.value}
      placeholder={props.fieldsPersonData.phone.placeholder}
      error={props.fieldsPersonData.phone.error}
      errorText={props.fieldsPersonData.phone.errorText}
      required={props.fieldsPersonData.phone.required}
      onChange={(newValue: string) => props.handleChange("phone", newValue)}
    />
  );
}
