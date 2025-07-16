import { Grid } from "@mui/material";
import ButtonSubmit from "../../components/ButtonSubmit";
import ButtonCancel from "../../components/ButtonCancel";
import { ClientData } from "../../../../types/client";


type ModalFooterProps = {
    handleModal:(value:boolean) => void;
    // drop: ()=> void;
    fieldsData: ClientData;
}

export default function ModalFooterConfirmDelete({handleModal, /*drop,*/ fieldsData}:ModalFooterProps){

    const handleCreate = () => {
        // drop();
    }
    return(
        <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
            <ButtonCancel handleModal={handleModal}/>
            <ButtonSubmit handleCreate={handleCreate}/>
        </Grid>
    )
}