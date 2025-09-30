import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import { Person } from "../../../../../../types/person";
import ButtonLink from "../../../../../../components/ButtonLink";
import ButtonDanger from "../../../../../../components/ButtonDanger";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
    // height: 800
};

type ModalProps = {
    visible: boolean;
    item: Person | null ;
    handleModal: (value:boolean) => void;
    drop: (id: number) => void;
}

export default function ModalDeleteConfirm({visible, item, handleModal, drop}:ModalProps){

    // if(item === null){
    //     return (<></>);
    // }

    const handleDelete = () => {
        if(item){
            drop(item.id)
        }
    }

    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Excluir definitivamente?
                </Typography>
                <Typography
                    id="modal-modal-text"
                    variant="inherit"
                    component="p"
                    sx={{color: "#444746", display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px',}}
                    >
                    O item "{item ? item.name : ""}" será excluido definitivamente. Não é possível desfazer essa ação.
                </Typography>
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingY: '20px', justifyContent: "flex-end"}}>
                    {/* <ButtonSecondary value="Cancelar" onClick={() => handleModal(false)} /> */}
                    {/* <ButtonPrimary value="Excluir definitivamente" onClick={()=> {drop(item.id)}}/> */}
                    <ButtonLink value="Cancelar" onClick={() => handleModal(false)} />
                    <ButtonDanger value="Excluir definitivamente" onClick={handleDelete}/>
                </Grid>
            </Box>
        </Modal>
    )

}