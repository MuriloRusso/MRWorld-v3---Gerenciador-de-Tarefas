import { Grid } from "@mui/material";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../../../components/ButtonPrimary";

export default function ModalCrudPersonFooter(){
    return(
        <Grid sx={{display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end'}}>
            <ButtonSecondary value="Cancelar"/>
            <ButtonPrimary value="Salvar" />
        </Grid>
    )
}