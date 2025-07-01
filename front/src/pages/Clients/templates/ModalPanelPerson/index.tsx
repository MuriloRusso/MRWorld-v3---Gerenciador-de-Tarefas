import { Grid } from "@mui/material";
import ListPerson from "../ListPerson";
import FormPerson from "../FormPerson";
import { FormPersonParamsProps } from "../../../../types/person";

export default function ModalPanelPerson({formPersonParams}:{formPersonParams:FormPersonParamsProps}){
    return (
        <Grid sx={{display: 'flex', flexDirection: "column", gap: 3}}>
            {
                formPersonParams.state ?
                <FormPerson/>:
                <ListPerson handleModal={formPersonParams.handleFormFunction}/>
            }
        </Grid>
    )
}