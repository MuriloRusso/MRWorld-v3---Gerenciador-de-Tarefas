import { Box, Typography } from "@mui/material";
import useMenuItems from "../../hooks/useMenuItems";
import ButtonMenu from "../ButtonMenu";

export default function Menu () {
    const { menuItems } = useMenuItems();
    return (
        <Box sx={{paddingY: 1, fontWeight: 500, minWidth: 256, maxWidth: '25%', height: "100vh", borderRight: "#E0E0E0", borderWidth: 0, borderRightWidth: 1, borderStyle: 'solid'}}>
            <Box sx={{paddingX: 1}}>
                <Typography component='h1' variant='h1' sx={{fontSize: 20}}>MRWorld</Typography>
                {
                    menuItems.map((item) => {
                        return(
                            <Box>
                                <Typography variant="subtitle1" component="p">{item.menuTitle}</Typography>
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