import { GridColDef } from "@mui/x-data-grid";
import ListMenu from "../../templates/ListMenu";

export default function useColumns({handleModalDelete}:{handleModalDelete: (value: boolean) => void;}) {
    const columns: GridColDef[] = [
        { field: 'logo', headerName: 'Logo', width: 70, renderCell(params) {                
                return(
                    <img 
                        src={
                            params.value ? 'http://localhost/MRWorld/MRWorld-v3---Gerenciador-de-Tarefas/api/clients/uploads/' + params.id + '/' + params.value : 
                            `https://placehold.co/100x100?text=${params.row.name}`
                        }
                        style={{maxHeight: '90%', width: '-webkit-fill-available', borderRadius: 100, margin: "2.5% 0"}}
                    />
                )                
            },
        },
        { field: 'name', headerName: 'Empresa/Cliente', width: 200 },
        { field: 'cnpj', headerName: 'CNPJ', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 150 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { 
            field: 'created_at',
            headerName: 'Criado em',
            width: 150,
            renderCell: (params) => {
                if (!params.value) return '';
                // Formata a data para dd/mm/aaaa hh:mm
                const date = new Date(params.value);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                
                return `${day}/${month}/${year} ${hours}:${minutes}`;
            }
        },

        {field: 'id', headerName: '', renderCell(params){            
            return <ListMenu item={params} handleModalDelete={handleModalDelete}/>
        }}

    ];
    return {columns}
}