import TableDataGrid from "../../../../templates/TableDataGrid";
import { Client } from "../../../../types/client";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";
// import List from "../../../Tasks/templates/List";

export default function List({rows, handleModal, drop}:{rows: Client[]; handleModal: (value: boolean) => void; drop: (id: number) => void;}){
    // const { rows } = useGetList();
    const { columns } = useColumns({drop});

    return <TableDataGrid rows={rows} columns={columns} sx={{ maxHeight: "60vh" }} headerTable={<HeaderList handleModal={handleModal}/>} />
}