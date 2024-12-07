import React from "react"
import {Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText} from '@mui/material'
import { Home } from "@mui/icons-material"


const Sidebar=()=>{
    return(
        <Box  flex={1} p={2} sx={{display:{ xs:"none", sm: "block"}}}>
             <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#Home">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          </List>

        </Box>
    )
}
export default Sidebar