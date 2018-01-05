import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Dropzone from 'react-dropzone';
import { addAlbum, addImage, getUser } from '../reducer/';
import { NavLink } from 'react-router-dom';


export class Scrapbook extends Component{
  constructor(props) {
    super(props)
    this.state = {
      uploadedFiles: false
    };
  }
    render() {
console.log('props?', this.props)
const props = this.props
const scrapbookArr = Object.keys(props.scrapbook)
const currFurId =  props.match.params.furbabyId
const pageArr = (props.fbs[currFurId].Pages ? Object.keys(props.fbs[currFurId].Pages) : [])
const pageid = (pageArr.length ? (pageArr.length + 1) : 1)
console.log('pageid', pageid)
// const pageidarr = (pageArr.length ? Object.keys(props.fbs[currFurId].Pages[pageid - 1].images) : [])

console.log('arr:', scrapbookArr)
      return (
    <div className='app'>
        <div className='wrapper'>
          <h1>Scrapbook Time!</h1>
          <NavLink to={`/pagemaker/${currFurId}/page/${pageid}`} style={{ textDecoration: 'none' }}>Make a new page</NavLink>
          <Dropzone
          multiple={true}
          accept="image/*"
          onDrop={(files) => props.addImage(files[0], 'd53bod1b', currFurId)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>

          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={(files) => props.addImage(files[0], 'jwsfhasx', currFurId)}>
            <p>Drop an image or click to select a file to upload with a black and white filter.</p>
          </Dropzone>

          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={(files) => props.addImage(files[0], 'a3tpor8y', currFurId)}>
            <p>Drop an image or click to select a file to upload with a cartoon filter.</p>
          </Dropzone>

        <div>
      <div className="FileUpload">
      {
        <div>
          {props.scrapbook === [] ? null : scrapbookArr.map(page => {
            return(
          <div key={page}>
            <p>{props.scrapbook[page].original_filename
            }</p>
            <img src={props.scrapbook[page].secure_url} />
          </div>
          )})}
        </div>
        }
      </div>
      </div>

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
const mapDispatch = { addAlbum, addImage, getUser };

export default withRouter(connect(mapState, mapDispatch)(Scrapbook))

