import TableDataGrid from "../../../../../../templates/TableDataGrid";
import { Client } from "../../../../../../types/client";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";

export default function List({handleModal, selectedItem}:{handleModal: (value: boolean) => void; selectedItem: Client | null}){
    const { people } = useGetList({selectedItem});
    const { columns } = useColumns();

    return <TableDataGrid rows={people} columns={columns} sx={{ height: "500px" }} headerTable={<HeaderList  handleModal={handleModal}/>}/>
}