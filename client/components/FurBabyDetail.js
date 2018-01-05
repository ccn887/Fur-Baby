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
            <div className='wrapper'>
              <h1 className="big-text">{fbs[currFurId].fbName}</h1>
              <img id="fb-pic" src={fbs[currFurId].fbpicURL} />
              <p> {fbs[currFurId].fbDescription}</p>
            </div>
        <div className='container'>

        <NavLink to={`/scrapbook/${currFurId}`} style={{ textDecoration: 'none' }}>My Scrapbook</NavLink>
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

