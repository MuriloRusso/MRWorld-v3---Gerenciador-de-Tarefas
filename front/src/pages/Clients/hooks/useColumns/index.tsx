import { GridColDef } from "@mui/x-data-grid";
import ListMenu from "../../templates/ListMenu";

export default function useColumns() {
    const columns: GridColDef[] = [
        { field: 'logo', headerName: 'Logo', width: 70, renderCell(params) {                
                return(
                    <img 
                        src={
                            params.value ? 'http://localhost/MRWorld/MRWorld-v3---Gerenciador-de-Tarefas/api/clients/uploads/' + params.id + '/' + params.value : 
                            `https://placehold.co/100x100?text=${params.row.name}`
                        }
                        style={{maxHeight: '90%', borderRadius: 100, margin: "2.5% 0"}}
                    />
                )                
            },
        },
        { field: 'name', headerName: 'Empresa/Cliente', width: 200 },
        { field: 'cnpj', headerName: 'CNPJ', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 150 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, },

        {field: 'id', headerName: '', renderCell(params){
            return <ListMenu/>
        }}

    ];
    return {columns}
}