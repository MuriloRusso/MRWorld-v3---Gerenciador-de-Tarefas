
import ListAltIcon from '@mui/icons-material/ListAlt';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DomainVerificationOutlinedIcon from '@mui/icons-material/DomainVerificationOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { ComponentType } from 'react';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';

type MenuItem = {
    menuTitle: string;
    menuComponent: MenuComponent[];
}
type MenuComponent = {
    text: string;
    Icon: ComponentType;
    link: string;
}

export default function useMenuItems(){
    const menuItems:MenuItem[] = [
        {
            menuTitle: "Painel",
            menuComponent: [
                {
                    text: "Tarefas",
                    link: "../tasks",
                    Icon: ListAltIcon
                },
                {
                    text: "Empresas/Clientes",
                    link: "../clients",
                    Icon: BusinessCenterOutlinedIcon
                },
                {
                    text: "Projetos",
                    link: "../tasks",
                    Icon: DomainVerificationOutlinedIcon
                },
                {
                    text: "Ideias",
                    link: "../tasks",
                    Icon: LightbulbOutlinedIcon
                }
            ]
        },
        {
            menuTitle: "Site",
            menuComponent: [
                {
                    text: "Acessos",
                    link: "../tasks",
                    Icon: BrowserUpdatedOutlinedIcon
                },
                {
                    text: "Contatos",
                    link: "../tasks",
                    Icon: CallOutlinedIcon
                },
                {
                    text: "Portfólio",
                    link: "../tasks",
                    Icon: DvrOutlinedIcon
                },
                {
                    text: "Projetos Pessoais",
                    link: "../tasks",
                    Icon: DvrOutlinedIcon
                },
                {
                    text: "Depoimentos",
                    link: "../tasks",
                    Icon: RecordVoiceOverOutlinedIcon
                }
            ]
        }
    ]


    return {menuItems}
}