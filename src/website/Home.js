import Sidebar from "./Sidebar"
import Feed from "./Feed"
import RightBar from "./Rightbar"
import { Box, Stack} from "@mui/material"
import Navbar from "./Navbar"


function Home(){
    return(
        <div>
           <Box>
            <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Feed/>
            <RightBar/>
            </Stack>
           </Box>
        </div>
    )
}
export default Home