import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function ButtonMenu({text, open}:{text:string; open:boolean;}){
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