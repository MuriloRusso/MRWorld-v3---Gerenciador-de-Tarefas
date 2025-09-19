import { Grid, Typography } from "@mui/material";
import InputName from "../../components/InputName";
import useFields from "../../hooks/useFields";
import InputPhone from "../../components/InputPhone";
import InputEmail from "../../components/InputEmail";
import InputPosition from "../../components/InputPosition";
import InputFunction from "../../components/InputFunction";
import { PersonData } from "../../../../../../types/person";

type FormProps = {
    fieldsPersonData: PersonData;
    handleChangePerson: (fieldName: keyof PersonData, newValue: string) => void
}

export default function Form({fieldsPersonData, handleChangePerson}:FormProps){


    return (
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
            <Grid sx={{backgroundColor: "#ccc", width: 150, height: 150, borderRadius: 100}}>

            </Grid>
            <Grid sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Criar pessoa
                </Typography>
                <InputName fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
                <InputPhone fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
                <InputEmail fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
                <InputPosition fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
                <InputFunction fieldsData={fieldsPersonData} handleChange={handleChangePerson}/>
            </Grid>
        </Grid>
    )
}