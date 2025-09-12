import { Grid } from "@mui/material";
import { FormPersonParamsProps } from "../../../../types/person";
import Form from "./templates/Form";
import List from "./templates/List";


export default function ModalPanelPerson({formPersonParams}:{formPersonParams:FormPersonParamsProps}){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            {/* { formPersonParams.state ? <Form/> : <List handleModal={formPersonParams.handleFormFunction}/> } */}
        </Grid>
    )
}