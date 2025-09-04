import { GridColDef, GridUpdateRowError } from "@mui/x-data-grid";
import ListMenu from "../../templates/ListMenu";
import { Client, ClientData } from "../../../../types/client";
import { Grid } from "@mui/material";

type useColumnsProps = {
    handleModal: (value: boolean) => void;
    handleModalPerson: (value: boolean) => void;
    handleModalDelete: (value: boolean) => void;
    changeSelectedItem: (item: Client | null) => void;
    handleChange: (fieldName: keyof ClientData, newValue: string) => void;
}

export default function useColumns({handleModal, handleModalDelete, changeSelectedItem, handleChange}:useColumnsProps) {

    const baseUrl = 'http://localhost/MRWorld/MRWorld-v3---Gerenciador-de-Tarefas/api/clients/uploads/';

    const columns: GridColDef[] = [
        { field: 'logo', headerName: 'Logo', width: 55, renderCell(params) {
            const url = 
                params.value ? baseUrl + params.id + '/' + params.value : 
                `https://placehold.co/100x100?text=${params.row.name}`;
                return(
                    <Grid sx={{display: 'flex', gap: 1, alignItems: 'center', height: "100%"}}>
                        <img 
                            src={url}
                            style={{
                                maxHeight: '90%',
                                width: '-webkit-fill-available',
                                borderRadius: 100,
                                margin: "2.5% 0"
                            }}
                        />
                    </Grid>
                )
            },
        },
        { field: 'name', headerName: 'Empresa/Cliente', width: 200 },
        { 
            field: 'client_by',
            headerName: 'Cliente de:',
            width: 150,
            renderCell: (params) => {
                if (!params.row?.client_by) return '';                
                const url = 
                    params.row.client_by.logo ? 
                    baseUrl + params.row.client_by.id + '/' + params.row.client_by.logo : 
                    `https://placehold.co/100x100?text=${params.row.client_by.name}`;
                
                return (
                    <Grid sx={{display: "flex", gap: 1, alignItems: 'center'}}>
                        <img width={25} src={url}/>{params.row?.client_by.name ?? ''}
                    </Grid>
                );
            }
        },
        { field: 'cnpj', headerName: 'CNPJ', width: 150 },
        { field: 'email', headerName: 'E-mail', width: 150 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { 
            field: 'created_at',
            headerName: 'Criado em',
            width: 150,
            renderCell: (params) => {
                if (!params.value) return '';
                // Formata a data para dd/mm/aaaa hh:mm
                const date = new Date(params.value);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                
                return `${day}/${month}/${year} ${hours}:${minutes}`;
            }
        },
        { field: 'id', headerName: '', renderCell(params){
            return (
                <ListMenu
                    item={params}
                    handleModal={handleModal}
                    handleModalDelete={handleModalDelete}
                    changeSelectedItem={changeSelectedItem}
                    handleChange={handleChange}
                />
            )
        }}
    ];
    return {columns}
}