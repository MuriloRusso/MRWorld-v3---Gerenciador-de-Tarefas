import { Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import { Client, ClientData } from "../../../../types/client";

type HeaderListProps = {
  handleModal: (value: boolean) => void;
  changeSelectedItem: (item: Client | null) => void;
  resetFields: () => void;
}

export default function HeaderList({handleModal, changeSelectedItem, resetFields}:HeaderListProps){

  const handleNewClick = () => {
    changeSelectedItem(null);
    resetFields();
    handleModal(true);
  }
  return (
      <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
        <ButtonNew handleModal={handleNewClick}/>
      </Grid>
  )
}