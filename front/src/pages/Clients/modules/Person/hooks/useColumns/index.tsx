import { GridColDef } from "@mui/x-data-grid";
import ListMenu from "../../../../templates/ListMenu";

export default function useColumns() {

    const columns: GridColDef[] = [
        { field: 'avatar', headerName: 'Foto', width: 70, renderCell(params) {                
                return(
                    <img 
                        src={
                            params.value ? params.value : 
                            `https://placehold.co/100x100?text=${params.row.name}`
                        }
                        style={{maxHeight: '90%', borderRadius: 100, margin: "2.5% 0"}}
                    />
                )
            },
        },
        { field: 'name', headerName: 'Nome', width: 200 },
        { field: 'phone', headerName: 'Telefone', width: 200 },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'position', headerName: 'Cargo', width: 200 },
        { field: 'function', headerName: 'Função', width: 200 },
        { field: 'notes', headerName: 'Anotações', width: 200 },

        {field: 'id', headerName: '', renderCell(params){
            return <></>
            // return <ListMenu item={params} handleModal={()=>{}} handleModalDelete={()=>{}} changeSelectedItem={()=>{}}/>
        }}

    ];
    return {columns}
}