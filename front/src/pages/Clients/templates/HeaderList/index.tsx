import { Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import { Client } from "../../../../types/client";

type HeaderListProps = {
    handleModal: (value: boolean) => void;
    changeSelectedItem: (item: Client | null) => void;
}

export default function HeaderList({handleModal, changeSelectedItem}:HeaderListProps){

  const handleNewwClick = () => {
    changeSelectedItem(null);
    handleModal(true);
  }
  return (
      <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
        <ButtonNew handleModal={handleNewwClick}/>
      </Grid>
  )
}