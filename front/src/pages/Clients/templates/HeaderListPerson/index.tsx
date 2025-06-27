import { Grid } from "@mui/material";
import ButtonNewPerson from "../../components/ButtonNewPerson";

export default function HeaderListPerson({handleModal}:{handleModal: (value: boolean) => void;}){
    return (
        <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
          <ButtonNewPerson />
        </Grid>
    )
}