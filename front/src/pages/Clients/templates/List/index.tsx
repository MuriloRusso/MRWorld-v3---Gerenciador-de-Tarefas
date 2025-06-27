import TableDataGrid from "../../../../templates/TableDataGrid";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";
// import List from "../../../Tasks/templates/List";

export default function List({handleModal}:{handleModal: (value: boolean) => void;}){
    const { rows } = useGetList();
    const { columns } = useColumns();

    return <TableDataGrid rows={rows} columns={columns} sx={{ maxHeight: "60vh" }} headerTable={<HeaderList handleModal={()=>handleModal}/>} />
}