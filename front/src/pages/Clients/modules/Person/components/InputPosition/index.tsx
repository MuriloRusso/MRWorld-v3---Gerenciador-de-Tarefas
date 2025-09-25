import Input from "../../../../../../components/Input";
import { PersonData } from "../../../../../../types/person";

type InputPositionProps = {
  props: {
    fieldsPersonData: PersonData;
    handleChange: (fieldName: keyof PersonData, newValue: string) => void;
  };
};

export default function InputPosition({ props }: InputPositionProps) {
  return (
    <Input
      label={props.fieldsPersonData.position.label}
      value={props.fieldsPersonData.position.value}
      placeholder={props.fieldsPersonData.position.placeholder}
      error={props.fieldsPersonData.position.error}
      errorText={props.fieldsPersonData.position.errorText}
      required={props.fieldsPersonData.position.required}
      onChange={(newValue: string) => props.handleChange("position", newValue)}
    />
  );
}
