import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/Dataprovider';
import NiKe from "../../img/Nike.jpg";

export const Header = () => {

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header>
      {/* <div className='menu'>
        <box-icon name="menu"></box-icon>
      </div> */}
      <Link to='/'>
        <div className='logo'>
          <img src={NiKe} alt='logo' width="150"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to='/'>INICIO</Link>
        </li>
        <li>
          <Link to='/productos'>PRODUCTOS</Link>
        </li>
      </ul>
      <div className='cart' onClick={toggleMenu}>
        <box-icon name="cart"></box-icon>
        <span className='item-total'>{carrito.length}</span>
      </div>
    </header>
  )
}