
import ListAltIcon from '@mui/icons-material/ListAlt';
import { ComponentType } from 'react';

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
                    link: "tasks",
                    Icon: ListAltIcon
                }
            ]
        }
    ]


    return {menuItems}
}