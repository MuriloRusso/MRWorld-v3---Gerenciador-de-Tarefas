import AutoComplete from "../../../../components/AutoComplete";
import { Client, ClientData } from "../../../../types/client";

type InputClientByProps = {
    fieldsData: ClientData;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    options: Client[];
}

export default function InputClientBy({fieldsData, handleChange, options}: InputClientByProps){
    return (
        <AutoComplete
            onChange={handleChange}
            options={[...options.map((option) => ({value: option.id, text: option.name}))]}
            state={fieldsData.client} 
        />
    )
}