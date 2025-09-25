import Input from "../../../../../../components/Input";
import { PersonData } from "../../../../../../types/person";

type InputFunctionProps = {
  props: {
    fieldsPersonData: PersonData;
    handleChange: (fieldName: keyof PersonData, newValue: string) => void;
  };
};

export default function InputFunction({ props }: InputFunctionProps) {
  return (
    <Input
      label={props.fieldsPersonData.function.label}
      value={props.fieldsPersonData.function.value}
      placeholder={props.fieldsPersonData.function.placeholder}
      error={props.fieldsPersonData.function.error}
      errorText={props.fieldsPersonData.function.errorText}
      required={props.fieldsPersonData.function.required}
      onChange={(newValue: string) => props.handleChange("function", newValue)}
    />
  );
}
