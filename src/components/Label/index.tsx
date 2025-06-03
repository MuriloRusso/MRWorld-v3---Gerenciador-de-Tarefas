import { Typography } from "@mui/material";

export default function Label({text}:{text:string}){
    return <Typography variant="subtitle2" component="label">{text}:</Typography>
}