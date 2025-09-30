import { Box, Grid, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import List from "../List";
import ButtonSecondary from "../../../../../../components/ButtonSecondary";
import useGetList from "../../hooks/useGetList";
import { useEffect, useState } from "react";
import { Client } from "../../../../../../types/client";
import { Person } from "../../../../../../types/person";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
//   width: 700,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth: '100%',
};

type ModalListProps = {
    visible: boolean;
    handleModal: (value:boolean) => void;
    handleFormPerson: (value: boolean) => void;
    selectedItem: Client | null;
    handleModalDelete: (value: boolean) => void;
}

export default function ModalList({visible, handleModal, handleFormPerson, selectedItem, handleModalDelete}:ModalListProps){

    const { getList, people} = useGetList({selectedItem});

    const [ rows, setRows ] = useState<Person[]>([]);

    useEffect(() => {
        const fetch = async () => {
            await getList();           
        }
        fetch();
    }, [selectedItem]);

    useEffect(()=>{
        setRows(people);
        console.log('setrows...');
        
    }, [people])


    useEffect(()=>{
        console.log('rows person:', rows);
    }, [rows])

    return (
        <Modal
            open={visible}
            onClose={() => handleModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Pessoas
                </Typography>
                <List rows={rows} handleModal={()=> handleFormPerson(true)} selectedItem={selectedItem} handleModalDelete={handleModalDelete}/>
                <Grid
                    sx={{
                        borderWidth: 0,
                        borderTopWidth: 1,
                        borderColor: "#ccc",
                        borderStyle: 'solid',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '20px',
                        paddingY: '20px',
                        justifyContent: "flex-end"
                    }}
                >
                    <ButtonSecondary onClick={()=> handleModal(false)} value="Voltar"/>
                </Grid>
            </Box>
        </Modal>
    )

}