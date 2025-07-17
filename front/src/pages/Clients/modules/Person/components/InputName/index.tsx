import InputLabel from "../../../../../../components/InputLabel";
import { ClientData } from "../../../../../../types/client";

export default function InputName(/*{fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}*/) {
    return (
        <InputLabel 
            // label={fieldsData.name.label}
            // value={fieldsData.name.value}
            // placeholder={fieldsData.name.placeholder}
            // error={fieldsData.name.error}
            // errorText={fieldsData.name.errorText}
            // required={fieldsData.name.required}
            value=""
            onChange={()=>{}}
            label="Nome da Pessoa"
            // onChange={(newValue:string) => handleChange('name', newValue)}
        />
    )
}