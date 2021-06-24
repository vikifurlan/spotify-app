import React from "react";
import "./index.css";
import {
  IoArrowRedoCircleOutline,
  IoArrowUndoCircleOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <div className="container_header">
      <div className="container_arrows">
      <IoArrowUndoCircleOutline fill="#B3B3B3" size={30}stroke="transparent"/>
        <IoArrowRedoCircleOutline fill="#B3B3B3" size={30} stroke="transparent" />
        
      </div>
      <div className="container_button">
        <button className="subscribe">Inscrever-se</button>
        <button className="enter">Entrar</button>
      </div>
      
    </div>
  );
};

export default Header;
