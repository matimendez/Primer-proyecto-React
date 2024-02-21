import "./index.css";
import DropDown from "./Dropdown"
import { useState } from "react";
export default function App(){
  const[selected, setSelected] = useState("Choose One")
  
  return (
  <div className='App'>
     <DropDown selected={selected} setSelected={setSelected}/>
  </div>
  )
}
