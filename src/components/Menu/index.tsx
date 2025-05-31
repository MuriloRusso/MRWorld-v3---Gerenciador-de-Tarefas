import { Box, Typography } from "@mui/material";
import useMenuItems from "../../hooks/useMenuItems";
import ButtonMenu from "../ButtonMenu";

export default function Menu () {
    const { menuItems } = useMenuItems();
    return (
        <Box sx={{paddingY: 1, fontWeight: 500, width: 256, height: "100vh", borderRight: "#E0E0E0", borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Box sx={{paddingX: 1}}>
                <Typography component='h1' variant='h1' sx={{fontSize: 20,paddingX: 2}}>MRWorld</Typography>
                {
                    menuItems.map((item) => {
                        return(
                            <Box sx={{marginY: '50px'}}>
                                <Typography variant="subtitle1" component="p" sx={{fontWeight: 500, fontSize: 22, paddingX: 2}}>{item.menuTitle}</Typography>
                                {
                                    item.menuComponent.map((item) => {
                                        return(<ButtonMenu text={item.text} Icon={item.Icon} link={item.link} />)
                                    })
                                }
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}