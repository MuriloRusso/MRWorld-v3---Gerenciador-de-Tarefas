import TableDataGrid from "../../../../templates/TableDataGrid";
import { Client, ClientData } from "../../../../types/client";
import useColumns from "../../hooks/useColumns";
import HeaderList from "../HeaderList";

type ListProps = {
    rows: Client[];
    handleModal: (value: boolean) => void;
    handleModalPerson: (value: boolean) => void;
    handleModalDelete: (value: boolean) => void;
    changeSelectedItem: (item: Client | null) => void;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
    resetFields: () => void;
}

export default function List({rows,
    handleModal,
    handleModalPerson,
    handleModalDelete,
    changeSelectedItem,
    handleChange,
    resetFields}:ListProps){
        
    const { columns } = useColumns({
        handleModal,
        handleModalPerson,
        handleModalDelete,
        changeSelectedItem,
        handleChange});
        
    return (
        <TableDataGrid
            rows={rows}
            columns={columns}
            sx={{ maxHeight: "60vh" }}
            headerTable={
                <HeaderList
                    handleModal={handleModal}
                    changeSelectedItem={changeSelectedItem}
                    resetFields={resetFields}
                />
            } 
        />
    )
}