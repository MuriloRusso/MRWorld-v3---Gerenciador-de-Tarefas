import { GridColDef } from "@mui/x-data-grid";
import ListMenu from "../../templates/ListMenu";
import { Person, PersonData } from "../../../../../../types/person";

type useColumnsProps = {
    // handleModal: (value: boolean) => void;
    // handleModalPerson: (value: boolean) => void;
    // handleModalDeletePerson: (value: boolean) => void;
    // changeSelectedItem: (item: Person | null) => void;
    // handleChange: (fieldName: keyof PersonData, newValue: string) => void;
}

export default function useColumns({
    // handleModal,
    // handleModalPerson,
    // handleModalDeletePerson,
    // changeSelectedItem,
    // handleChange
}:useColumnsProps) {

    const columns: GridColDef[] = [
        {field: 'id', headerName: '', renderCell(params){
            return (
                <ListMenu
                    item={params}
                    handleModal={()=>{}}
                    handleModalPerson={()=>{}}
                    // handleModalDelete={handleModalDeletePerson}
                    handleModalDelete={()=>{}}

                    changeSelectedItem={()=>{}}
                    handleChange={()=>{}}
                />
            )
        }},
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
        { field: 'notes', headerName: 'Anotações', width: 200 }
    ];
    return {columns}
}