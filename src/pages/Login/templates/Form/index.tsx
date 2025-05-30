import { Box, Typography } from "@mui/material";
import { inputProps } from "../../../../types/input.js";
import { LoginFields } from "../../../../types/login.js";
import InputUser from "../../components/InputUser/index";
import InputPassword from "../../components/InputPassword/index";
import ButtonSubmit from "../../components/ButtonSubmit/index";
import { Link } from "react-router-dom";

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
            <ButtonSubmit />
            <Typography
                variant="inherit"
                component="p"
                sx={{color: "#828282", textAlign: "center"}}
            >
                Desenvolvido por <Link to="https://murilorusso.com.br/" style={{color: "black", fontWeight: 600}} target="_blank">Murilo Russo</Link>
            </Typography>
        </Box>
    )
}