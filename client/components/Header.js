import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img src="http://laikadogdetroit.com/wp-content/uploads/2015/07/LAIKA-WHITE-ADD-SMALL-296x300.png"
          />
      </div>
      <nav>
        <NavLink to={`/`} className="nav-item"> Home</NavLink>
        <NavLink to={`/fur-babies`} className="nav-item">Fur Babies</NavLink>
      </nav>
    </header>
  )
}
export default Header

// const mapState = null;
// export default withRouter(connect(mapState)(Header))
