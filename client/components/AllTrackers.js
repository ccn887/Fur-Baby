import React, { Component } from 'react';
import firebase from '../../src/fire';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { getTrackers, addTracker } from '../reducer/trackers';


class AllTrackers extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   behavior: '',
    //   notes:{
    //    date:{
    //       day: null,
    //       month: null,
    //       year: null,
    //    },
    //     observation: ''
    //   },
    // }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  render() {
    const trackers = this.props.trackers
    const trackArr = Object.keys(trackers)
    return (
      <div className='app'>
        <header>
          <div className='wrapper'>
            <h1>Behaviors I'm Tracking</h1>

          </div>
        </header>
        <div className='container'>
          <section className="add-fb">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="behavior" placeholder="What new behavior would you like to track?" />
              <input type="date" name="date" />
              <input type="text" name="observation" placeholder="What did you observe?" />
              <button>Bark!</button>
            </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {
                  trackArr.map((tracker) => {
                    return (
                      <li key={tracker}>
                      <NavLink to={`/trackers/${tracker}`} style={{ textDecoration: 'none' }}>
                      <h1> {trackers[tracker].behavior}</h1>
                        <h3>{trackers[tracker].notes.date}</h3>
                        <p>Observation: {trackers[tracker].notes.observation}</p>
                        </NavLink>
                      </li>
                    )
                  })}
                }
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const tracker = {
      behavior: e.target.behavior.value,
      notes: {
        date: e.target.date.value,
        observation: e.target.observation.value
      },
    }
    console.log('submitted:', tracker)
    this.props.addTracker(tracker)
    e.target.behavior.value = ''
    e.target.date.value = ''
    e.target.observation.value = ''
  }
}
const mapState = (state) => {
  return {
    trackers: state.trackers,
  };
};

const mapDispatch = { getTrackers, addTracker }

export default withRouter(connect(mapState, mapDispatch)(AllTrackers))

