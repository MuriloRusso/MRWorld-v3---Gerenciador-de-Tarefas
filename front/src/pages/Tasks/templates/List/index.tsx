import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import useGetList from "../../hooks/useGetList";
import useColumns from "../../hooks/useColumns";


export default function List() {
    const paginationModel = { page: 0, pageSize: 5 };
    const { rows } = useGetList();
    const { columns } = useColumns();

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    )
}