import { Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import { Client, ClientData } from "../../../../types/client";

type HeaderListProps = {
  handleModal: (value: boolean) => void;
  changeSelectedItem: (item: Client | null) => void;
  handleChange: (fieldName: keyof ClientData, newValue: string) => void;
}

export default function HeaderList({handleModal, changeSelectedItem, handleChange}:HeaderListProps){

  const handleNewwClick = () => {
    changeSelectedItem(null);
    handleChange("name", "");
    handleModal(true);
  }
  return (
      <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
        <ButtonNew handleModal={handleNewwClick}/>
      </Grid>
  )
}