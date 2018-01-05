import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { login, logout } from '../reducer/user';
import { NavLink } from 'react-router-dom';

export const Home = (props) => {
  console.log('user:', props.user)
    return (
      <div className='app'>
              <h1 id='title'>Fur Baby</h1>
              {props.user !== null ?
                <button id="login" onClick={props.logout}>Log Out</button>
                :
                <button id="login" onClick={props.login}>Log In</button>
              }

          <h1 className="big-text">Capture and share every moment with your pets in your Fur Baby scrapbook.</h1>
          <NavLink to={`/fur-babies`} style={{ textDecoration: 'none' }}>Let me see the fur babies!</NavLink>

        </div>
    );
  }

  const mapState = (state) => {
    return {
      user: state.user,
    };
  };

  const mapDispatch = {login, logout}

  export default withRouter(connect(mapState, mapDispatch)(Home))


