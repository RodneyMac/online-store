import React from 'react';
import { Link } from 'react-router-dom';
import Portada from "../../img/inicio.jpg";

export const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to="/"><h1 className=''>Inicio</h1></Link>
      <Link to="/productos"><h1 className=''>Productos</h1></Link>
      <img src={Portada} alt=""/>
    </div>
  )
}