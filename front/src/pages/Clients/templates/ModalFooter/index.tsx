import { Grid } from "@mui/material";
import ButtonSubmit from "../../components/ButtonSubmit";
import ButtonCancel from "../../components/ButtonCancel";

export default function ModalFooter({handleModal}:{handleModal:(value:boolean) => void;}){
    return(
        <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
            <ButtonCancel handleModal={handleModal}/>
            <ButtonSubmit/>
        </Grid>
    )
}