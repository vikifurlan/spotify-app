import React from "react"
import "./index.css"
import {IoHomeOutline, IoSearchOutline,IoLibraryOutline,IoAddOutline,IoHeartSharp} from "react-icons/io5"

const Sidebar =()=>{
  return (
    <div className="container">

      <div className="img_spot">
        <img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png"/>
      </div>

      <div className="items"> 

        <div className="row_items">
          <IoHomeOutline stroke="#B3B3B3" size={24}/>
          <p>Início</p>
        </div>

        <div className="row_items">
          <IoSearchOutline stroke="#B3B3B3" size={24}/>
          <p>Buscar</p>
        </div>

        <div className="row_items">
          <IoLibraryOutline stroke="#B3B3B3" size={24}/>
          <p>Sua Biblioteca</p>
        </div>

      </div>
      <div className="items"> 

<div className="row_items">
  <IoAddOutline stroke="#B3B3B3" size={24}/>
  <p>Criar playlist</p>
</div>

<div className="row_items">
  <IoHeartSharp fill="#B3B3B3" size={24}/>
  <p>Músicas curtidas</p>
</div>

</div>
    </div>
  )
}
export default Sidebar


