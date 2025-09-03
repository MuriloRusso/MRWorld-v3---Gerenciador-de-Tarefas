import AutoComplete from "../../../../components/AutoComplete";
import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputClientBy({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        // <InputLabel 
        //     label={fieldsData.name.label}
        //     value={fieldsData.name.value}
        //     placeholder={fieldsData.name.placeholder}
        //     error={fieldsData.name.error}
        //     errorText={fieldsData.name.errorText}
        //     required={fieldsData.name.required}
        //     onChange={(newValue:string) => handleChange('name', newValue)}
        // />
        <AutoComplete onChange={handleChange} options={[]} state={fieldsData.client} />
    )
}