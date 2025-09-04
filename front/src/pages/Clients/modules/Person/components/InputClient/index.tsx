import AutoComplete from "../../../../../../components/AutoComplete";
import { Person, PersonData } from "../../../../../../types/person";

type InputClientProps = {
    fieldsData: PersonData;
    handleChange: (fieldName: keyof PersonData, newValue: string) => void;
    options: Person[];
}

export default function InputClient({fieldsData, handleChange, options}: InputClientProps){
    return (
        <AutoComplete<PersonData>
            fieldName={'id_client'}

            onChange={handleChange}
            options={[...options.map((option) => ({value: option.id, text: option.name}))]}
            state={fieldsData.id_client}
        />
    )
}