import { Divider, Grid, Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import ButtonNew from "../../pages/Clients/components/ButtonNew";

export default function TableDataGrid({handleModal, rows, columns}:{handleModal: (value: boolean) => void; rows: any[], columns: any[]}) {
  const paginationModel = { page: 0, pageSize: 10 };
  // const { rows } = useGetList();
  // const { columns } = useColumns();

  console.log(rows);
  
  console.log(columns);

  return (
    <Paper sx={{ maxHeight: "60vh" }}>
      <Grid sx={{display: 'flex', justifyContent: "flex-end", padding: 2}}>
        <ButtonNew handleModal={handleModal}/>
      </Grid>
      <Divider/>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        localeText={
            {
                noRowsLabel: 'Sem linhas',
                columnMenuHideColumn: "Ocultar Coluna",
                columnsManagementNoColumns: "Gerenciar Colunas",
                columnMenuSortAsc: "Crescente",
                columnMenuSortDesc: "Decrescente",
                columnMenuUnsort: "Desordenar",
                columnMenuFilter: "Filtro",
                columnHeaderSortIconLabel: "Organizar",
                filterOperatorContains: "Contém",
                filterOperatorDoesNotContain: "Não Contem",
                filterOperatorEquals: "Igual",
                filterOperatorDoesNotEqual: "Não é igual",
                filterOperatorStartsWith: "Começa com",
                filterOperatorEndsWith: "Termina com",
                filterOperatorIsEmpty: "Está vázio",
                filterOperatorIsNotEmpty: "Não está vázio",
                filterOperatorIsAnyOf: "Qualquer um",
                columnMenuShowColumns: "Mostar Coluna",
                columnsManagementReset: "Resetar",
                columnsManagementShowHideAllText: "Ocultar/Exibir",
                columnsManagementSearchTitle: "Buscar",
                filterPanelOperator: "Operador",
                filterPanelColumns: "Coluna",
                filterPanelInputLabel: "Valor",
                filterPanelInputPlaceholder: "Valor do filtro",
                paginationRowsPerPage: "Itens por página",
                paginationDisplayedRows(params) {
                    return params.from + '-' + params.to + ' de ' + params.count
                },
                footerRowSelected(params) {
                    return  params + " Itens selecionados"
                },
                paginationItemAriaLabel(type) {
                    switch (type) {
                        case 'next':
                        return 'Próxima Página';
                        case 'previous':
                        return 'Página Anterior';
                        case 'first':
                        return 'Primeira Página';
                        case 'last':
                        return 'Última Página';
                        default:
                        return `Página ${type}`;
                    }
                }

            }
        }
        sx={{ border: 0, maxHeight: "100%" }}
      />
    </Paper>
  );
}
