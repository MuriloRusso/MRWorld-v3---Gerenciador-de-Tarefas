import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material";
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export default function useColumns() {
    const columns: GridColDef[] = [
        { field: 'logo', headerName: 'Logo', width: 150, renderCell(params) {            
                return(
                    <img src={params.value} style={{maxHeight: '90%', borderRadius: 100, margin: "2.5% 0"}}/>
                )
            },
        },
        { field: 'name', headerName: 'Empresa/Cliente', width: 350 },
        { field: 'ower', headerName: 'Nome Dono', width: 250 },
        { field: 'phone', headerName: 'Telefone', width: 150 },
        { field: 'created_at', headerName: 'Criado', width: 150, },

        {field: 'id', headerName: '', renderCell(params){
             return (
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {/* <InboxIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {/* <DraftsIcon /> */}
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                        </List>
                    </nav>
                </Box>
            );
        }}

    ];
    return {columns}
}