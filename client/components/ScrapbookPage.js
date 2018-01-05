import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { addCaption, addImage, getUser } from '../reducer/';
import { NavLink } from 'react-router-dom';


export class ScrapbookPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  hideFunction() {
    this.state.showForm ?
      this.setState({ showForm: false }) : this.setState({ showForm: true })
  }

  renderNewCaption(imageid) {
    return (
      <section id="caption" >
        <div className="caption">
          <form onSubmit={this.handleSubmit}>
            <div >
              <h2 >
                <input
                  name="date"
                  type="date"
                  className="form-like"
                />
              </h2>
              <h1 >
                <input
                  name="title"
                  type="text"
                  placeholder="Photo Title"
                  className="form-like"
                />
              </h1>
              <h2 >
                <input
                  name="caption"
                  type="text"
                  placeholder="Your Caption Here"
                  className="form-like"
                />
              </h2>
              <input
                name="id"
                readOnly
                value={imageid}
                className="form-like"
              />
              <div >
                <button id="submit"
                  type="submit">Save Caption</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const props = this.props
    const pageid = props.match.params.pageId
    const currFurId = props.match.params.furbabyId
    const imageid = event.target.id.value
    console.log('imageid:', imageid)
    const caption = {
      date: event.target.date.value,
      title: event.target.title.value,
      caption: event.target.caption.value,
    };
    this.props.addCaption(currFurId, pageid, imageid, caption);
    event.target.date.value = null;
    event.target.title.value = '';
    event.target.caption.value = '';
    this.setState({
      showForm: false
    })
  }


  render() {
    const props = this.props
    const currFurId = props.match.params.furbabyId
    const nextpage = currFurId + 1
    const pageid = props.match.params.pageId
    const pageidarrtest = props.fbs[currFurId].Pages[pageid].images
    let pageidarr;
    typeof pageidarrtest !== 'object' ? pageidarr = null :
      pageidarr = Object.keys(pageidarrtest)
    return (
      <div className='app'>
        <div className='wrapper'>
          <h1 className="big-text">Time to Add the Finishing Touches! </h1>

          <NavLink to={`/pagemaker/${currFurId}/page/${pageid}`} style={{ textDecoration: 'none' }}> Add more photos!</NavLink>
          {
            <div>
              {pageidarr === [] ? null : pageidarr.map(page => {
                const imageobj = props.fbs[currFurId].Pages[pageid].images
                const image = imageobj[page].secure_url
                return (
                  <div key={page}>
                    {imageobj[page].caption ? (
                      <div className="caption">
                        <img src={image} />
                        <h1> {imageobj[page].caption.title}</h1>
                        <h2> {imageobj[page].caption.caption}</h2>
                        <p> {imageobj[page].caption.date}</p>
                      </div>) : (
                        <div>
                          <img src={image} />
                          <button id="submit" onClick={() => this.hideFunction()}>Add Caption</button>
                          {this.state.showForm ? this.renderNewCaption(page) : null}</div>)}
                  </div>
                )
              })}
            </div>
          }
        </div>
      </div>)
  }
}

const mapState = (state) => {
  return {
    scrapbook: state.scrapbook,
    fbs: state.furbabies
  }
}
const mapDispatch = { addCaption, addImage, getUser };

export default withRouter(connect(mapState, mapDispatch)(ScrapbookPage))
