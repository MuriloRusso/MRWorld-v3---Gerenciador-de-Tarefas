import { Divider, Grid, Paper, SxProps } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Theme } from "@emotion/react";

type TableDataGrid = {
  rows: any[];
  columns: any[];
  sx?: SxProps<Theme>;
  headerTable?: React.ReactNode;
}

export default function TableDataGrid({rows, columns, sx, headerTable}:TableDataGrid) {
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={sx}>
      <Grid sx={{display: 'flex', flexDirection: 'column', height: "100%"}}>

        {headerTable}
        <Divider/>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick // <- esta linha evita seleção ao clicar na linha
          localeText={{
            noRowsLabel: 'Nenhum item encontrado.',
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
              return params.from + '-' + params.to + ' de ' + params.count;
            },
            footerRowSelected(params) {
              return params + " Itens selecionados";
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
          }}
          sx={{ border: 0 }}
        />

      </Grid>
    </Paper>
  );
}
