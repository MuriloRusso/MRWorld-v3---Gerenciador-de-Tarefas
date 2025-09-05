import { Grid } from "@mui/material";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../../../components/ButtonPrimary";

type ModalCrudPersonFooterProps = {
    handleModal: () => void;
}

export default function ModalCrudPersonFooter({handleModal}:ModalCrudPersonFooterProps){
    return(
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end'}}>
            <ButtonSecondary onClick={handleModal} value="Cancelar"/>
            <ButtonPrimary value="Salvar" />
        </Grid>
    )
}