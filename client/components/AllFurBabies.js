import React, { Component } from 'react';
import firebase from '../../src/fire';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { getFbs, addFb } from '../reducer/furbabies';

class AllFurBabies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ownerHandle: '',
      fbName: '',
      fbpicURL: '',
      fbDescription: '',

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit(e) {
      e.preventDefault();
      const fb = {
        ownerHandle: this.state.ownerHandle,
        fbName: this.state.fbName,
        fbpicURL: this.state.fbpicURL,
        fbDescription: this.state.fbDescription,
      }
      this.props.addFb(fb)
      this.setState({
        ownerHandle: '',
        fbName: '',
        fbpicURL: '',
        fbDescription: '',
      });
    }

  render() {
    const fbs = this.props.fbs
    const furArr = Object.keys(fbs)
    console.log('props:', furArr)

    return (
      <div className='fb'>


            <h1 className="big-text"> All Fur Babies</h1>




          <section className='add-fb'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="ownerHandle" placeholder="Who are you?" onChange={this.handleChange} value={this.state.ownerHandle} />
              <input type="text" name="fbName" placeholder="What's your baby's name?" onChange={this.handleChange} value={this.state.fbName} />
              <input type="text" name="fbpicURL" placeholder="Type the link to an avatar" onChange={this.handleChange} value={this.state.fbpicURL} />
              <input type="text" name="fbDescription" placeholder="Describe the pupper in question" onChange={this.handleChange} value={this.state.fbDescription} />
              <button>Woof!</button>
            </form>
          </section>
          <section className='display-item'>

            <ul>
              {furArr.map((fb) => {
                return (
                  <li key={fb} >
                  <NavLink className="fbwrapper"to={`/fur-babies/${fb}`} style={{ textDecoration: 'none' }}>
                  <img id="fb-pic" src={fbs[fb].fbpicURL} />
                    <h3 id="fb-prof">{fbs[fb].fbName}</h3>
                    <p id="fb-prof">walked by: {fbs[fb].ownerHandle}</p>
                    <p id="fb-prof"> {fbs[fb].fbDescription}</p>
                    </NavLink>
                  </li>
                )
              })}
            </ul>

        </section>
        </div>

    );
  }
}

const mapState = (state) => {
  return {
    fbs: state.furbabies,
  };
};

const mapDispatch = {getFbs, addFb}

export default withRouter(connect(mapState, mapDispatch)(AllFurBabies))
