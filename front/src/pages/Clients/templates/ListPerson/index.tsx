import TableDataGrid from "../../../../templates/TableDataGrid";
import useGetPersonList from "../../hooks/useGetPersonList";
import usePersonColumns from "../../hooks/usePersonColumns";

export default function ListPerson(){
    const { rows } = useGetPersonList();
    const { columns } = usePersonColumns();

    return <TableDataGrid rows={rows} columns={columns} sx={{ height: "500px" }}/>
}