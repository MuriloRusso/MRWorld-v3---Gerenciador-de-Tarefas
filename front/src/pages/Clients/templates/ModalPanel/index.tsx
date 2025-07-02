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
import { FormPersonParamsProps } from '../../../../types/person';
import ModalPanelAddress from '../ModalPanelAddress';

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

type ModalPanelProps = {
  fieldsData: ClientData;
  handleChange: (fieldName: keyof ClientData, newValue: string) => void;
  formPersonParams: FormPersonParamsProps;
}

export default function ModalPanel({fieldsData, handleChange, formPersonParams}:ModalPanelProps ) {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px', minHeight: '300px' }}>
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
                label="Endereço"
                {...a11yProps(2)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            <Tab
                label="Anotações"
                {...a11yProps(3)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />
            <Tab
                label="Pessoas"
                {...a11yProps(4)}
                sx={{
                '&.Mui-selected': {
                    color: 'black',
                    fontWeight: 'bold',
                },
                }}
            />

            <Tab
                label="Projetos"
                {...a11yProps(5)}
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
        <ModalPanelAddress fieldsData={fieldsData} handleChange={handleChange}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ModalPanelContact fieldsData={fieldsData} handleChange={handleChange}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ModalPanelNotes/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <ModalPanelPerson formPersonParams={formPersonParams}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ModalPanelProjects/>
      </CustomTabPanel>
    </Box>
  );
}