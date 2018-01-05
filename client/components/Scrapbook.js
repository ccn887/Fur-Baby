import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Dropzone from 'react-dropzone';
import { addpageId, addCaption, addImage, getUser } from '../reducer/';
import { NavLink } from 'react-router-dom';


export class Scrapbook extends Component{
  constructor(props) {
    super(props)
    this.state = {
      uploadedFiles: false
    };
  }
  componentDidMount(){
    const currFurId =  this.props.match.params.furbabyId
    const pageArr = (this.props.fbs[currFurId].Pages ? Object.keys(this.props.fbs[currFurId].Pages) : [])
    const pageid = (pageArr.length ? (pageArr.length + 1) : 1)
    this.props.addpageId(currFurId, pageid)
  }
    render() {
console.log('props?', this.props)
const props = this.props
const scrapbookArr = Object.keys(props.scrapbook)
const currFurId =  props.match.params.furbabyId
const pageArr = (props.fbs[currFurId].Pages ? Object.keys(props.fbs[currFurId].Pages) : [])
const pageid = (pageArr.length ? (pageArr.length ) : 1)

console.log('arr:', scrapbookArr)
      return (
    <div className='app'>
        <div className='wrapper'>
          <h1 id="title">Navigate {props.fbs[currFurId].fbName}'s Scrapbook!</h1>
          { pageArr.map(page => {
            const pagenum = pageArr.indexOf(page) + 1

            return (
            typeof props.fbs[currFurId].Pages[page] === 'object' ?
              (<div key={page}>
              <NavLink  to={`/scrapbook/${currFurId}/page/${pagenum}`} style={{ textDecoration: 'none' }}>Page {pagenum}</NavLink>
              </div>) : null
            )
          })}
          <NavLink  to={`/pagemaker/${currFurId}/page/${pageid}`} style={{ textDecoration: 'none' }}>Make a new page</NavLink>
      </div>
      </div> )
}
}

const mapState = (state) => {
  return {
    scrapbook: state.scrapbook,
    fbs: state.furbabies
  }
}
const mapDispatch = { addpageId, addImage, getUser };

export default withRouter(connect(mapState, mapDispatch)(Scrapbook))

