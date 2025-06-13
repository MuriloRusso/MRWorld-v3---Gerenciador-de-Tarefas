import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type ButtonMenuProps = {
  Icon?: React.ElementType;
  text: string;
  link?: string;
  open: boolean;
};

export default function ButtonMenu({Icon, text, link, open }:ButtonMenuProps){
    return(
        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            sx={[
                {
                minHeight: 48,
                px: 2.5,
                },
                open
                ? {
                    justifyContent: 'initial',
                    }
                : {
                    justifyContent: 'center',
                    },
            ]}
            >
            <ListItemIcon
                sx={[
                {
                    minWidth: 0,
                    justifyContent: 'center',
                },
                open
                    ? {
                        mr: 3,
                    }
                    : {
                        mr: 'auto',
                    },
                ]}
            >
                {Icon && <Icon/>}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText
                primary={text}
                sx={[
                open
                    ? {
                        opacity: 1,
                    }
                    : {
                        opacity: 0,
                    },
                ]}
            />
            </ListItemButton>
        </ListItem>
    )
} 