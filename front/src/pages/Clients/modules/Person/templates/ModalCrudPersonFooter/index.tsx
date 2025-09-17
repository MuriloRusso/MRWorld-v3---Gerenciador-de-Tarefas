import { Grid } from "@mui/material";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";
import ButtonPrimary from "../../../../../../components/ButtonPrimary";
import { PersonData } from "../../../../../../types/person";

type ModalCrudPersonFooterProps = {
    handleModal: (value: boolean) => void;
    create: () => void;
}

export default function ModalCrudPersonFooter({handleModal, create}:ModalCrudPersonFooterProps){

    const handleSave = () => {
        console.log('salvando pessoa');        
        handleModal(false);
        create();
        console.log('fim do salvamento');
        
    }
    return(
        <Grid 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                justifyContent: 'flex-end',
                borderTop: '1px solid #ccc',
                paddingTop: 5,
                marginTop: 5
            }}
        >
            <ButtonSecondary onClick={() => handleModal(false)} value="Cancelar"/>
            <ButtonPrimary value="Salvar" onClick={handleSave} />
        </Grid>
    )
}