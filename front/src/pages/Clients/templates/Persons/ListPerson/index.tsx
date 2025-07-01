import TableDataGrid from "../../../../../templates/TableDataGrid";
import useGetPersonList from "../../../hooks/useGetPersonList";
import usePersonColumns from "../../../hooks/usePersonColumns";
import HeaderListPerson from "../../HeaderListPerson";

export default function ListPerson({handleModal}:{handleModal: (value: boolean) => void;}){
    const { rows } = useGetPersonList();
    const { columns } = usePersonColumns();

    return <TableDataGrid rows={rows} columns={columns} sx={{ height: "500px" }} headerTable={<HeaderListPerson  handleModal={handleModal}/>}/>
}