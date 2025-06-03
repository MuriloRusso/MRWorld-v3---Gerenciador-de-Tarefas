import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputEmail({fieldsData}: {fieldsData: ClientData}){
    return (
        <InputLabel
            label={fieldsData.email.label}
            value={fieldsData.email.value}
            placeholder={fieldsData.email.placeholder}
            error={fieldsData.email.error}
            errorText={fieldsData.email.errorText}
            required={fieldsData.email.required}
        />
    )
}