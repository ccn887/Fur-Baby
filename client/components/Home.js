import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { login, logout } from '../reducer/user';

export const Home = (props) => {
  console.log('user:', props.user)
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Fur Baby</h1>
              {props.user !== null ?
                <button onClick={props.logout}>Log Out</button>
                :
                <button onClick={props.login}>Log In</button>
              }
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form>
                <input type="text" name="username" placeholder="What's your name?" />
                <input type="text" name="currentItem" placeholder="What are you bringing?" />
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              </ul>
            </div>
          </section>
        </div>
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


