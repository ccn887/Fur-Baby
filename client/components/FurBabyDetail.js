import React, { Component } from 'react';
import firebase from '../../src/fire';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


export const FurBabyDetail = (props) => {
  const {fbs, trackers} = props
  const currFurId =  props.match.params.furbabyId
  console.log(currFurId)
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>{fbs[currFurId].fbName}</h1>
              <img id="fb-pic" src={fbs[currFurId].fbpicURL} />
              <p> {fbs[currFurId].fbDescription}</p>
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
    fbs: state.furbabies,
    trackers: state.trackers
  };
};


export default withRouter(connect(mapState)(FurBabyDetail))

