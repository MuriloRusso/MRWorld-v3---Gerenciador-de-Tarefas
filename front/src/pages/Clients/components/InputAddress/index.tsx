import Input from "../../../../components/Input";
import { ClientData } from "../../../../types/client";

export default function InputAddress({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Input
            label={fieldsData.address.label}
            value={fieldsData.address.value}
            placeholder={fieldsData.address.placeholder}
            error={fieldsData.address.error}
            errorText={fieldsData.address.errorText}
            required={fieldsData.address.required}
            onChange={(newValue:string) => handleChange('address', newValue)}
            sx={{width: '-webkit-fill-available'}}
        />
    )
}