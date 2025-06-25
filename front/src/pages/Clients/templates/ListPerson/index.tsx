import TableDataGrid from "../../../../templates/TableDataGrid";
import useGetPersonList from "../../hooks/useGetPersonList";
import usePersonColumns from "../../hooks/usePersonColumns";

export default function ListPerson(){
    const { rows } = useGetPersonList();
    const { columns } = usePersonColumns();

    return <TableDataGrid handleModal={()=>{}} rows={rows} columns={columns} sx={{ maxHeight: "350px" }}/>
}