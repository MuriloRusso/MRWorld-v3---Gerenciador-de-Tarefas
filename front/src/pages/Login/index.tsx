import { Box } from "@mui/material";
import Form from "./templates/Form";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import useFields from "./hooks/useFields";

export default function Login() {
    const {
        loginFields,
        handleLoginFieldChange,
        handleLoginFieldError
    } = useFields();

    return (
        <Box sx={{
            width: "100%",
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box>
                <Title />
                <SubTitle />
                <Form
                    userField={loginFields.userField}
                    passwordField={loginFields.passwordField}
                    handleLoginFieldChange={handleLoginFieldChange}
                    handleUserFieldError={handleLoginFieldError}
                />
            </Box>
        </Box>
    );
}
