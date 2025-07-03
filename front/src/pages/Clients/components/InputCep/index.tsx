import InputLabel from "../../../../components/InputLabel";
import MasketInputLabel from "../../../../components/MasketInputLabel";
import { ClientData } from "../../../../types/client";

export default function InputCep({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        // <InputLabel 
        //     label={fieldsData.cep.label}
        //     value={fieldsData.cep.value}
        //     placeholder={fieldsData.cep.placeholder}
        //     error={fieldsData.cep.error}
        //     errorText={fieldsData.cep.errorText}
        //     required={fieldsData.cep.required}
        //     onChange={(newValue:string) => handleChange('cep', newValue)}
        //     sx={{maxWidth: '350px'}}
        // />
        <MasketInputLabel
            mask="99999-999"
            label={fieldsData.cep.label}
            value={fieldsData.cep.value}
            placeholder={fieldsData.cep.placeholder}
            error={fieldsData.cep.error}
            errorText={fieldsData.cep.errorText}
            required={fieldsData.cep.required}
            onChange={(newValue:string) => handleChange('cep', newValue)}
            sx={{maxWidth: '350px'}}
        />
    )
}