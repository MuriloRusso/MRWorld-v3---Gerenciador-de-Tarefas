import { Box, Grid, Skeleton, Typography } from "@mui/material";
import ButtonNew from "../../components/ButtonNew";
import Search from "../Search";
import { useEffect, useState } from "react";
import List from "../List";
import { Client } from "../../../../types/client";

export default function Container({rows, handleModal}:{rows: Client[]; handleModal: (value:boolean) => void;}) {

    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <Box
            className="container" 
            sx={{
                paddingX: 10,
                paddingY: 5,
                width: "calc(100% - 417px)",
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '100vh',
                backgroundColor: "#efefef",
                flexGrow: 1
            }}
        >
            <Grid 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: "space-between",
                    maxWidth: '400px',
                    flexWrap: 'wrap',
                    marginTop: 5
                }}
            >
                <Typography variant="h2" component="h2" sx={{fontSize: 25}}>Empresas/Clientes</Typography>
                {/* {loading ? <Skeleton variant="rounded" width={170} height={40} /> : <ButtonNew handleModal={handleModal}/>} */}
            </Grid>
            
            {loading ? <Skeleton variant="rounded" width={450} height={90} /> : <Search/>}

            {loading ? <Skeleton variant="rounded" width={'100%'} height={'60vh'} /> : <List handleModal={handleModal} rows={rows}/>}
        </Box>
    )
}