import Input from "../../../../components/Input";
import { ClientData } from "../../../../types/client";

export default function InputNeighborhood({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <Input
            label={fieldsData.neighborhood.label}
            value={fieldsData.neighborhood.value}
            placeholder={fieldsData.neighborhood.placeholder}
            error={fieldsData.neighborhood.error}
            errorText={fieldsData.neighborhood.errorText}
            required={fieldsData.neighborhood.required}
            onChange={(newValue:string) => handleChange('neighborhood', newValue)}
        />
    )
}