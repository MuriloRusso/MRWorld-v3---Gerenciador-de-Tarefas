import { Grid, Typography } from "@mui/material";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";
import InputPosition from "../../components/InputPosition";
import InputFunction from "../../components/InputFunction";
import { PersonData } from "../../../../../../types/person";

type FormProps = {
    props: {
        fieldsPersonData: PersonData;
        handleChangePerson: (fieldName: keyof PersonData, newValue: string) => void
    }
}

export default function Form(props:FormProps){


    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
            <Grid sx={{backgroundColor: "#ccc", width: 150, height: 150, borderRadius: 100}}>

            </Grid>
            <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Criar pessoa
                </Typography>
                <InputName fieldsData={props.props.fieldsPersonData} handleChange={props.props.handleChangePerson}/>
                <InputPhone fieldsData={props.props.fieldsPersonData} handleChange={props.props.handleChangePerson}/>
                <InputEmail fieldsData={props.props.fieldsPersonData} handleChange={props.props.handleChangePerson}/>
                <InputPosition fieldsData={props.props.fieldsPersonData} handleChange={props.props.handleChangePerson}/>
                <InputFunction fieldsData={props.props.fieldsPersonData} handleChange={props.props.handleChangePerson}/>
            </Grid>
        </Grid>
    )
}