import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


const Contact=()=>{
    return(
        <Layout>
            <Box sx={{my: 5, ml: 10, "& h4":{ fontWeight:'bold', mg:2 }}}>
                <Typography variant="h4">
                    Contact My Restauran
                </Typography>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, at eligendi repellendus sequi itaque voluptatum. Sed quo repellat pariatur ea voluptates suscipit, deleniti eveniet. Dicta sint eius error fugit atque.</p>
            </Box>
            <Box sx={{ m: 3, width: "600px", ml: 10, "@media (max-width:600px)": {width:'300px'}}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:'black', color:'white',}} align="center">Contact Detals</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{color:"red", pt: 1}}/> +998882055520 (torollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                    <EmailIcon sx={{color:"skyblue", pt: 1}}/> help@myrest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                    <CallIcon sx={{color:"green", pt: 1}}/> +998882055520
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )

}
export default Contact