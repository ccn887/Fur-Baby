import React, { Component } from 'react';
import fire from '../../src/fire';


export default class TrackerDetail extends Component {
  constructor(){
    super()
    this.state = {
      notes:{
        date:{
           day:null,
           month:null,
           year:null,
        },
         observation: ''
       },
    }
  }
  render(){
    const test = this.state.test;
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>{test}</h1>

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
}
