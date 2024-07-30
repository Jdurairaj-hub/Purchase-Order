import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1><Link to="/">CompanyX</Link></h1>
      <ul>
        <li><Link to="/list-parts">List Parts</Link></li>
        <li><Link to="/list-purchase-orders">List Purchase Orders</Link></li>
        <li><Link to="/find-po">Find PO</Link></li>
        <li><Link to="/manage-po">Manage PO</Link></li>  
      </ul>
    </nav>
  );
};

export default NavBar;
