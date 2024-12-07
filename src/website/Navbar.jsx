import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import React, { useState } from "react"
import { CurrencyBitcoin, Mail, Notifications } from "@mui/icons-material"

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});


const Search= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
                
}))
const Icons= styled(Box)(({theme})=>({display:"none", alignItems:"center", [theme.breakpoints.up("sm")]:{display:"flex"}, gap:"20px"}))

const UserBox= styled(Box)(({theme})=>({display:"flex", alignItems:"center", [theme.breakpoints.up("sm")]:{display:"none"}, gap:"10px"}))

const Navbar=()=>{
    const[open, setOpen]= useState(false)
    return(
        <AppBar position="sricky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm: "block"}}}>Sarcoboi</Typography>
                <CurrencyBitcoin sx={{display:{xs:"none", sm: "block"}}}/>
                <Search><InputBase placeholder="search..."/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Avatar sx={{width:30, height:30}} src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" onClick={e=>setOpen(true)}/>
                    
                </Icons>
                    <UserBox>
                    <Avatar sx={{width:30, height:30}} src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"/>
                    <Typography variant="span">John</Typography>
                    </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical:'top',
          horizontal: 'right'
        }}
       transformOrigin={{
          vertical:'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}
export default Navbar