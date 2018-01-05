import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'


const Header = (props) => {
  return (
    <header className="rowcontainer">
        <img id="logo" src="http://laikadogdetroit.com/wp-content/uploads/2015/07/LAIKA-WHITE-ADD-SMALL-296x300.png"
          />
      <nav>
        <NavLink to={`/`} className="nav-item"> Home</NavLink>
        <NavLink to={`/fur-babies`} className="nav-item">Fur Babies</NavLink>
      </nav>
    </header>
  )
}
export default Header


