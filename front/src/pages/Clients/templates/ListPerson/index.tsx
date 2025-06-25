import TableDataGrid from "../../../../templates/TableDataGrid";
import useGetPersonList from "../../hooks/useGetPersonList";
import usePersonColumns from "../../hooks/usePersonColumns";

export default function List({handleModal}:{handleModal: (value: boolean) => void;}){
    const { rows } = useGetPersonList();
    const { columns } = usePersonColumns();

    return <TableDataGrid handleModal={handleModal} rows={rows} columns={columns}/>
}