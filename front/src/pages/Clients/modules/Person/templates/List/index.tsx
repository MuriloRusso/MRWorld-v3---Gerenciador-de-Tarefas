import TableDataGrid from "../../../../../../templates/TableDataGrid";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";

export default function List({handleModal}:{handleModal: (value: boolean) => void;}){
    const { rows } = useGetList();
    const { columns } = useColumns();

    return <TableDataGrid rows={rows} columns={columns} sx={{ height: "500px" }} headerTable={<HeaderList  handleModal={handleModal}/>}/>
}