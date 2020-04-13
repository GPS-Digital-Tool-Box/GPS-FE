import React from 'react';
import modules from '../../modules';
import { Link } from 'react-router-dom';

export const Header = () => {
  const modulesToShow = Object.keys(modules);
  const menuItems = modulesToShow.map(module => {
    return <li><Link to={`/`}>{modules[module].name}</Link></li>
  })
  return (
    <div className="header-wrapper">
      <h1>Welcome to GPS</h1>
      <div className="menu"> 
        <ul>
          {menuItems}
        </ul>
      </div>
    </div>
  );
};
