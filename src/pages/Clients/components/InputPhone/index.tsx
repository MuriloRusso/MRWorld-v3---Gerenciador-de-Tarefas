import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputPhone({fieldsData}: {fieldsData: ClientData}){
    return (
        <InputLabel
            label={fieldsData.phone.label}
            value={fieldsData.phone.value}
            placeholder={fieldsData.phone.placeholder}
            error={fieldsData.phone.error}
            errorText={fieldsData.phone.errorText}
            required={fieldsData.phone.required}
        />
    )
}