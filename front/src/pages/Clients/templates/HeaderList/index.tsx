import { Grid } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";

export default function HeaderList({handleModal}:{handleModal: (value: boolean) => void;}){
    return (
        <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
          <ButtonNew handleModal={handleModal}/>
        </Grid>
    )
}