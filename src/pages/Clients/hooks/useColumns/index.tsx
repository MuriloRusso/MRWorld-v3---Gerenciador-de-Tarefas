import { GridColDef } from "@mui/x-data-grid";

export default function useColumns() {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Empresa/Cliente', width: 250 },
        { field: 'ower', headerName: 'Nome Dono', width: 130 },
        { field: 'phone', headerName: 'Telefone', width: 130 },
        { field: 'created_at', headerName: 'Criado', width: 90, },
    ];
    return {columns}
}