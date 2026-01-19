import { Box, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { consultaOps } from '../../types/index';
import { useMemo } from 'react';
import { z } from "zod";

type OpsData = z.infer<typeof consultaOps>[number];

//type OpsData = typeof consultaOps;

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#f5f7fa',
          color: '#424242',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '20px',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          fontSize: '14px',
        },
        selectLabel: {
          fontSize: '14px',
        },
        displayedRows: {
          fontSize: '14px',
        },
        select: {
          fontSize: '14px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            fontSize: '14px',
          },
        },
      },
    },
  },
});

function TableOps({ data }: { data: OpsData[] }) {
  const columns = useMemo<MRT_ColumnDef<OpsData>[]>(
    () => [
      { accessorKey: 'id_ops', header: 'ID', enableHiding: true },
      { accessorKey: 'id_usuario', header: 'ID_USER', enableHiding: true },
      { accessorKey: 'id_matricula', header: 'MATRICULA', size: 140 },
      { accessorKey: 'id_compania', header: 'AEROLINEA', size: 140 },
      { accessorKey: 'id_aeronave', header: 'AERONAVE', size: 140 },
      { accessorKey: 'id_calificador', header: 'CALIFICADOR', size: 140 },
      { accessorKey: 'tipo_mov', header: 'TIPO_MOV', size: 140 },
      { accessorKey: 'origen', header: 'ORIGEN', size: 140 },
      { accessorKey: 'destino', header: 'DESTINO', size: 140 },
      { accessorKey: 'posicion', header: 'POSICION', size: 140 },
      { accessorKey: 'pista', header: 'PISTA', size: 140 },
      //{ accessorKey: 'iata_aeropuerto', header: 'RUTA', size: 100 },
      { accessorKey: 'fecha_iti', header: 'FECHA_ITI', size: 140 },
      { accessorKey: 'hora_iti', header: 'HORA_ITI', size: 140 },
      { accessorKey: 'fecha_iniOps', header: 'FECHA_REAL', size: 160 },
      { accessorKey: 'hora_real', header: 'HORA_REAL', size: 150 },
      { accessorKey: 'fecha_calzos', header: 'FECHA_CALZOS', size: 160 },
      { accessorKey: 'hora_calzos', header: 'HORA_CALZOS', size: 160 },
      { accessorKey: 'fecha_finOps', header: 'FECHA_FIN', size: 140 },
      { accessorKey: 'hora_finOps', header: 'HORA_FIN', size: 140 },
      { accessorKey: 'demora', header: 'TIEMPO_DEMORADO', size: 170 },
      { accessorKey: 'tipo_llegada', header: 'TIPO_LL', size: 170 },
      { accessorKey: 'tipo_salida', header: 'TIPO_S', size: 170 },
      { accessorKey: 'id_compania', header: 'AEROLINEA', size: 140 },
      { accessorKey: 'ocupacion', header: 'OCUPACION', size: 140 },
      { accessorKey: 'adulto_nac', header: 'ADULTO NAC', size: 160 },
      { accessorKey: 'infante_nac', header: 'INFANTE NAC', size: 160 },
      { accessorKey: 'transito_nac', header: 'TRANSITO NAC', size: 160 },
      { accessorKey: 'conexion_nac', header: 'CONEXION NAC', size: 160 },
      { accessorKey: 'excento_nac', header: 'EXCENTO NAC', size: 160 },
      { accessorKey: 'adulto_int', header: 'ADULTO INT', size: 160 },
      { accessorKey: 'infante_int', header: 'INFANTE INT', size: 160 },
      { accessorKey: 'transito_int', header: 'TRANSITO INT', size: 160 },
      { accessorKey: 'conexion_int', header: 'CONEXION INT', size: 160 },
      { accessorKey: 'excento_int', header: 'EXCENTO INT', size: 160 },
      { 
        accessorKey: 'total_nac', 
        header: 'TOTAL NAC', 
        size: 160,
        muiTableBodyCellProps: {
          sx: {
            fontWeight: 'bold',
          },
        },
      },
      { 
        accessorKey: 'total_int', 
        header: 'TOTAL INT', 
        size: 160,
        muiTableBodyCellProps: {
          sx: {
            fontWeight: 'bold',
          },
        },
      },
      { 
        accessorKey: 'total_pax', 
        header: 'TOTAL PAX', 
        size: 160,
        muiTableBodyCellProps: {
          sx: {
            fontWeight: 'bold',
            color: 'primary.main',
          },
        },
      },
      { accessorKey: 'pza_equipaje', header: 'PZA_EQUIPAJE', size: 160 },
      { accessorKey: 'kgs_equipaje', header: 'KGS_EQUIPAJE', size: 160 },
      { accessorKey: 'kgs_carga', header: 'KGS_CARGA', size: 160 },
      { accessorKey: 'correo', header: 'CORREO', size: 160 },
      { accessorKey: 'mostrador', header: 'MOSTRADOR', size: 160 },
      { accessorKey: 'banda', header: 'BANDA', size: 160 },
      { accessorKey: 'pta_abordaje', header: 'PTA_ABORDAJE', size: 160 },
      { accessorKey: 'observaciones', header: 'OBSERVACIONES', size: 160 },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableGlobalFilter: true,
    enableColumnOrdering: false,
    enableColumnResizing: true,
    enableColumnFilters: true,
    enablePagination: true,
    enableStickyHeader: true,
    enableFullScreenToggle: false,
    enableDensityToggle: false,
    enableHiding: true,
    positionToolbarAlertBanner: 'bottom',
    muiTablePaperProps: {
      elevation: 3,
      sx: {
        borderRadius: '8px',
        overflow: 'hidden',
      },
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: 'calc(100vh - 250px)',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: 'bold',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        padding: '12px 16px',
      },
    },
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100],
      showFirstButton: true,
      showLastButton: true,
    },
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
      sorting: [{ id: 'fecha_iniOps', desc: true }],
      columnVisibility: {
        id_ops: false,
        id_usuario: false,
      },
    },
    renderBottomToolbarCustomActions: ({ table }) => {
      const visibleRows = table.getFilteredRowModel().rows;
    
      const total_Nac = visibleRows.reduce(
        (sum, row) => sum + Number(row.original.total_nac || 0),
        0
      );
      const total_Int = visibleRows.reduce(
        (sum, row) => sum + Number(row.original.total_int || 0),
        0
      );

      const total_Ops = visibleRows.length;
      const totalPasajeros = total_Nac + total_Int;

      const numberFormatter = new Intl.NumberFormat('es-MX');
    
      return (
        <Box
          component={Paper}
          elevation={0}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            backgroundColor: '#f5f7fa',
            borderRadius: '8px',
            margin: '16px 0',
            gap: 2,
            width: '100%',
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="text.secondary">
              Nacionales
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary">
              {numberFormatter.format(total_Nac)}
            </Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="text.secondary">
              Internacionales
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary">
              {numberFormatter.format(total_Int)}
            </Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="text.secondary">
              Total Pasajeros
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary.dark">
              {numberFormatter.format(totalPasajeros)}
            </Typography>
          </Box>
          
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="text.secondary">
              Operaciones
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="primary.dark">
              {numberFormatter.format(total_Ops)}
            </Typography>
          </Box>
        </Box>
      );
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        padding: 2,
        backgroundColor: '#f5f7fa',
        minHeight: '100vh',
      }}>
        <MaterialReactTable table={table} />
      </Box>
    </ThemeProvider>
  );
}

export default TableOps;