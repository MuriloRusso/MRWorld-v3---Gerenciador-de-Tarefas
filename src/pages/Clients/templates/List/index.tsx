import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useGetList from "../../hooks/useGetList";
import useColumns from "../../hooks/useColumns";


export default function List() {
    const paginationModel = { page: 0, pageSize: 10 };
    const { rows } = useGetList();
    const { columns } = useColumns();

    return (
        <Paper sx={{maxHeight: "60vh"}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
            
                pageSizeOptions={[10, 20]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    )
}