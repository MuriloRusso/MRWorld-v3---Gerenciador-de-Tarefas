import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InputLogo from '../../components/InputLogo';
import InputDescription from '../../components/InputNotes';
import InputNotes from '../../components/InputNotes';
import InputName from '../../components/InputName';
import { Grid } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ display: value === index ? 'block' : 'none' }} // 👈 manter montado, mas ocultar
            >
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        </div>
    );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ModalPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
                style: {
                backgroundColor: 'black', // linha preta ao selecionar
                },
            }}
            >
            <Tab
                label="Logo/Foto"
                {...a11yProps(0)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            <Tab
                label="Dados"
                {...a11yProps(1)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            <Tab
                label="Anotações"
                {...a11yProps(2)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            </Tabs>

      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <InputName/>
            <InputLogo/>
        </Grid>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <InputNotes/>

      </CustomTabPanel>
    </Box>
  );
}