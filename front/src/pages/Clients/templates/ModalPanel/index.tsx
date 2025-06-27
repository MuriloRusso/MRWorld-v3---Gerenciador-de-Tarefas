import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ModalPanelIntro from '../ModalPanelIntro';
import ModalPanelNotes from '../ModalPanelNotes';
import ModalPanelContact from '../ModalPanelContact';
import { ClientData } from '../../../../types/client';
import ModalPanelPerson from '../ModalPanelPerson';
import ModalPanelProjects from '../ModalPanelProjects';

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

export default function ModalPanel({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px', minHeight: '430px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
            TabIndicatorProps={{
                style: {
                backgroundColor: 'black', // linha preta ao selecionar
                },
            }}
            >
            <Tab
                label="Introdução"
                {...a11yProps(0)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            <Tab
                label="Contatos"
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
            <Tab
                label="Pessoas"
                {...a11yProps(3)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />

            <Tab
                label="Projetos"
                {...a11yProps(4)}
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
        <ModalPanelIntro fieldsData={fieldsData} handleChange={handleChange}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ModalPanelContact fieldsData={fieldsData} handleChange={handleChange}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ModalPanelNotes/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ModalPanelPerson/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ModalPanelProjects/>
      </CustomTabPanel>
    </Box>
  );
}