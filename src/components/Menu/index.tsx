import { Box, Typography } from "@mui/material";
import useMenuItems from "../../hooks/useMenuItems";
import ButtonMenu from "../ButtonMenu";
import ButtonLogout from "../ButtonLogout";

export default function Menu () {
    const { menuItems } = useMenuItems();
    return (
        <Box sx={{ fontWeight: 500, width: 256, minHeight: "100vh", borderRight: "#E0E0E0", borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Box sx={{paddingX: 1, marginY: 2, position: 'fixed', width: 256}}>
                <Typography component='h1' variant='h1' sx={{fontSize: 30,paddingX: 2}}>MRWorld</Typography>
                {
                    menuItems.map((item, i) => {
                        return(
                            <Box sx={{marginY: '40px'}} key={i}>
                                <Typography variant="subtitle1" component="p" sx={{fontWeight: 500, fontSize: 22, paddingX: 2}}>{item.menuTitle}</Typography>
                                {
                                    item.menuComponent.map((item, i) => {
                                        return(<ButtonMenu text={item.text} Icon={item.Icon} link={item.link} key={i} />)
                                    })
                                }
                            </Box>
                        )
                    })
                }
                <ButtonLogout/>
            </Box>
        </Box>
    )
}