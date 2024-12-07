import Home from "./Home/Home"
import Table from "./table/table"
import { Routes, Route, Link} from "react-router-dom";
import './Dars_2.css'



function Dars2(){
  return(
    <div className="Dars">
      <div className="Links">
         <Link to="/">Mahsulotlar</Link> &nbsp;
         <Link to="/table">Buyurtmalarim</Link>
      </div> 
      <div></div>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
     </Routes>
      
    </div>
  )
}
export default Dars2