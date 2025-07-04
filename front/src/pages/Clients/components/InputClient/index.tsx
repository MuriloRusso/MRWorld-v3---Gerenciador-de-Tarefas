import { useState } from "react";
import AutoComplete from "../../../../components/AutoComplete";
import { Client, ClientData } from "../../../../types/client";
import { Option } from "../../../../types/input";
import useFields from "../../hooks/useFields";
import useGetList from "../../hooks/useGetList";
import { Grid } from "@mui/material";
import Label from "../../../../components/Label";

export default function InputClient({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    // const { rows } = useGetExamList();
    const { rows } = useGetList();

    // const { schedulingData, handleChangeSchedulingData } = useFields();
    const [ac, setAc] = useState();
    const options:Option[] = [];

    // const rows:Client[] = [];

    rows.map((row) => {
        options.push({value: row.id, text: row.name});
    })

    return (
        <Grid>
            <Label text={fieldsData.client.placeholder}/>
            <AutoComplete options={options} state={fieldsData.client} onChange={(newValue:string) => handleChange('client', newValue)}/>
        </Grid>
    )
}