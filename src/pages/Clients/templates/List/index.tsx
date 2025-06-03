import { Paper } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import useGetList from "../../hooks/useGetList";
import useColumns from "../../hooks/useColumns";

// Traduções manuais em português:
const localeText = {
  noRowsLabel: 'Sem linhas',
  noResultsOverlayLabel: 'Nenhum resultado encontrado.',
  errorOverlayDefaultLabel: 'Ocorreu um erro.',
  toolbarDensity: 'Densidade',
  toolbarDensityLabel: 'Densidade',
  toolbarDensityCompact: 'Compacta',
  toolbarDensityStandard: 'Padrão',
  toolbarDensityComfortable: 'Confortável',
  toolbarColumns: 'Colunas',
  toolbarColumnsLabel: 'Selecionar colunas',
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Esconder filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Download CSV',
  toolbarExportPrint: 'Imprimir',
  columnsPanelTextFieldLabel: 'Encontrar coluna',
  columnsPanelTextFieldPlaceholder: 'Título da coluna',
  columnsPanelDragIconLabel: 'Reordenar coluna',
  columnsPanelShowAllButton: 'Mostrar todas',
  columnsPanelHideAllButton: 'Ocultar todas',
  paginationLabelRowsPerPage: 'Linhas por página:',
  /*paginationLabelDisplayedRows: ({ from, to, count }) =>
    `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,
  checkboxSelectionHeaderName: 'Selecionar',*/
  // Adicione outros conforme necessário
};

export default function List() {
  const paginationModel = { page: 0, pageSize: 10 };
  const { rows } = useGetList();
  const { columns } = useColumns();

  return (
    <Paper sx={{ maxHeight: "60vh" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        // localeText={localeText}
        // localeText={localeText.paginationLabelRowsPerPage: "teste"}
        // paginationLabelRowsPerPage={"teste"}
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
                // Colum: "Coluna"
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
                paginationRowsPerPage: "Itens por página",
                filterPanelOperator: "Operador",
                filterPanelColumns: "Coluna",
                filterPanelInputLabel: "Valor",
                filterPanelInputPlaceholder: "Valor do filtro"
                // promptFieldPlaceholder: "Valor do Filtro"
            }
        }
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
