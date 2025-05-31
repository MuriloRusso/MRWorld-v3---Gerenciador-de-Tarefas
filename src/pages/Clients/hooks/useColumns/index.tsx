import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export default function useColumns() {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Empresa/Cliente', width: 350 },
        { field: 'ower', headerName: 'Nome Dono', width: 250 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, },
        { field: 'logo', headerName: 'Logo', width: 150, renderCell(params) {            
                return(
                    <img src={params.value} style={{maxHeight: '90%', borderRadius: 100, margin: "2.5% 0"}}/>
                )
            },
        }

    ];
    return {columns}
}