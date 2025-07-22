import { Grid } from "@mui/material";
import ButtonSubmit from "../../components/ButtonSubmit";
import ButtonCancel from "../../components/ButtonCancel";
import { Client, ClientData } from "../../../../types/client";


type ModalFooterProps = {
    handleModal:(value:boolean) => void;
    create: (newClient:ClientData)=> void;
    fieldsData: ClientData;
    update: (selectedItem: Client, clienteData: ClientData) => void;
    selectedItem: Client | null;
}

export default function ModalFooter({handleModal, create, fieldsData, update, selectedItem}:ModalFooterProps){

    const handleSubmit = () => {
        selectedItem === null ? create(fieldsData) : update(selectedItem, fieldsData);
    }

    return(
        <Grid sx={{borderWidth: 0, borderTopWidth: 1, borderColor: "#ccc", borderStyle: 'solid',  display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
            <ButtonCancel handleModal={handleModal}/>
            <ButtonSubmit handleSubmit={handleSubmit}/>
        </Grid>
    )
}