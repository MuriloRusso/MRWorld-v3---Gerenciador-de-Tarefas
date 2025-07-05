import TableDataGrid from "../../../../templates/TableDataGrid";
import { Client } from "../../../../types/client";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";
// import List from "../../../Tasks/templates/List";

export default function List({rows, handleModal}:{rows: Client[]; handleModal: (value: boolean) => void;}){
    // const { rows } = useGetList();
    const { columns } = useColumns();

    return <TableDataGrid rows={rows} columns={columns} sx={{ maxHeight: "60vh" }} headerTable={<HeaderList handleModal={handleModal}/>} />
}