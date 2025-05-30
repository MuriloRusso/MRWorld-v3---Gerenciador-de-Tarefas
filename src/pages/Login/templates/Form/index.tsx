import { Box } from "@mui/material";
import { inputProps } from "../../../../types/input.js";
import { LoginFields } from "../../../../types/login.js";
import InputUser from "../../components/InputUser/index";
import InputPassword from "../../components/InputPassword/index";
// import InputUser from "../components/InputUser/index.tsx";
// import InputUser from "../../components/InputUser/index.js";
// import InputPassword from "../../components/InputPassword/index.js";

type FormProps = {
    userField: inputProps;
    passwordField: inputProps;
    handleLoginFieldChange: (field: keyof LoginFields, newValue: string) => void;
    handleUserFieldError: (field: keyof LoginFields, newValue: boolean) => void;
}

export default function Form ({userField, passwordField, handleLoginFieldChange, handleUserFieldError}:FormProps) {
    return (
        <Box sx={{display: "flex", flexDirection: "column", gap: 2, marginTop: 2}}>
            <InputUser userField={userField} handleLoginFieldChange={handleLoginFieldChange} />
            <InputPassword passwordField={passwordField} handleLoginFieldChange={handleLoginFieldChange} />
        </Box>
    )
}