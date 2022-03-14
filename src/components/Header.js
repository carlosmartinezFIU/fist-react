import Button from "./Button";
import { useState } from "react";

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
    <header className="container_header">
        <div className="task_header">
        <h1 className="first_header">{ title }</h1>
        <Button color={showAdd ? "Red" : "Green"}  text={showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </div>
       
    </header>
  )
}

export default Header