import { Box } from "@mui/material";
import Form from "./templates/Form";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";

export default function Login() {
    return (
        <Box sx={{width: "100%", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>
                <Title/>
                <SubTitle/>
                <Form/>
            </Box>
        </Box>
    )
}