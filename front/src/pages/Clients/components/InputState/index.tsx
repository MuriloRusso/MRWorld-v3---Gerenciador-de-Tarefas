import Input from "../../../../components/Input";
import { ClientData } from "../../../../types/client";

export default function InputState({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Input
            label={fieldsData.state.label}
            value={fieldsData.state.value}
            placeholder={fieldsData.state.placeholder}
            error={fieldsData.state.error}
            errorText={fieldsData.state.errorText}
            required={fieldsData.state.required}
            onChange={(newValue:string) => handleChange('state', newValue)}
        />
    )
}