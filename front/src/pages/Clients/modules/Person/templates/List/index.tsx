import TableDataGrid from "../../../../../../templates/TableDataGrid";
import { Client } from "../../../../../../types/client";
import { Person } from "../../../../../../types/person";
import useModals from "../../../../hooks/useModals";
import useColumns from "../../hooks/useColumns";
import useGetList from "../../hooks/useGetList";
import HeaderList from "../HeaderList";


type ListProps = {
    rows: Person[];
    handleModal: (value: boolean) => void;
    selectedItem: Client | null
    handleModalDelete: (value: boolean) => void;
        changeSelectedItem: (item: Person | null) => void;

}

export default function List({rows, handleModal, selectedItem, handleModalDelete, changeSelectedItem}:ListProps){

    // const { people } = useGetList({selectedItem});
    const { columns } = useColumns({handleModalDelete, changeSelectedItem});

    return <TableDataGrid rows={rows} columns={columns} sx={{ height: "500px" }} headerTable={<HeaderList  handleModal={handleModal}/>}/>
}