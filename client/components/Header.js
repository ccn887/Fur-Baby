import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://i.pinimg.com/736x/6d/df/8a/6ddf8af02deade6ad339aad96f5efd94--dog-logo-dog-walking.jpg"
          />
      </div>
      <nav>
        <NavLink to={`/`} className="nav-item"> Home</NavLink>
        <NavLink to={`/fur-babies`} className="nav-item">Fur Babies</NavLink>
      </nav>
      <div id="app" className="home">
        <div id="title">Fur Baby!
      </div>
      </div>
    </header>
  )
}
export default Header

// const mapState = null;
// export default withRouter(connect(mapState)(Header))
