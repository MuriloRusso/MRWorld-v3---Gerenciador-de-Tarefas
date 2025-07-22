import { Grid } from "@mui/material";
import ButtonSubmit from "../../components/ButtonSubmit";
import ButtonCancel from "../../components/ButtonCancel";
import { Client, ClientData } from "../../../../types/client";


type ModalFooterProps = {
    handleModal:(value:boolean) => void;
    create: (newClient:ClientData)=> void;
    fieldsData: ClientData;
    update: (selectedItem: Client, clienteData: ClientData) => void;
}

export default function ModalFooter({handleModal, create, fieldsData, update}:ModalFooterProps){

    const handleCreate = () => {
        create(fieldsData);
    }
    const handleUpdate = () => {
        // update(fieldsData, );

        // update();
    }
    return(
        <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
            <ButtonCancel handleModal={handleModal}/>
            <ButtonSubmit handleCreate={handleCreate}/>
        </Grid>
    )
}