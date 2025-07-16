import TableDataGrid from "../../../../templates/TableDataGrid";
import { Client } from "../../../../types/client";
import useColumns from "../../hooks/useColumns";
import HeaderList from "../HeaderList";

type ListProps = {
    rows: Client[];
    handleModal: (value: boolean) => void;
    handleModalDelete: (value: boolean) => void;
}

export default function List({rows, handleModal, handleModalDelete}:ListProps){
    const { columns } = useColumns({handleModalDelete});
    return <TableDataGrid rows={rows} columns={columns} sx={{ maxHeight: "60vh" }} headerTable={<HeaderList handleModal={handleModal}/>} />
}