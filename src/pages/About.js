import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About=()=>{
    return(
    <Layout>
        <Box sx={{
            my: 15,
            textAlign:"center",
            p: 2,
            "& h4":{
                fontWeight: "bold",
                my:2,
                 fontSize: "2rem"
            },
            "& p":{
                textAlign: "justify"
            },
            "@media (max-width:600px)":{
                mt:0,
                "& h4":{
                    fontSize: "1.5rem"
                }
            },
        }}>
            <Typography variant="h4">Welcome To My Restauran</Typography>
        </Box>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti blanditiis repellat aliquid itaque quidem quae vero, soluta dicta ad rem magni est incidunt, modi maxime, aspernatur at. Est molestiae culpa dolore, deserunt obcaecati corrupti saepe similique ducimus quod unde! Eveniet cumque veniam voluptates tenetur, quos quas ea atque corrupti unde nulla! Rem consequuntur quaerat recusandae voluptatum natus numquam pariatur error eos, illum fugiat velit quasi accusantium quam repudiandae distinctio? Quaerat harum minima obcaecati at veritatis quo eveniet, cum sint. Facilis illo amet nesciunt, earum iusto harum et perferendis numquam ut consequuntur ratione repudiandae aut! Dignissimos ut sequi quidem! Sunt.
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci eligendi expedita repellat exercitationem placeat tempore animi impedit eius esse quam, repellendus, sapiente ex incidunt, neque explicabo ad debitis provident magnam amet quod natus voluptatem quia. Libero unde numquam, vitae earum sunt natus ad voluptas enim repellendus esse. Temporibus illo facere harum ducimus pariatur commodi facilis eius hic? Repellendus impedit nam consectetur iure omnis incidunt provident ducimus assumenda natus corporis tempore commodi molestiae nemo error, perferendis pariatur ipsa optio totam. Eos impedit aperiam quibusdam neque, et esse quasi officia fugit adipisci nam dolorem necessitatibus minima cumque, ducimus reiciendis! Ad, voluptate!
        </p>
    </Layout>

    )
}
export default About