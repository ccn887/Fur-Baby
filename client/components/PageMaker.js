import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Dropzone from 'react-dropzone';
import { addAlbum, addImage, getUser } from '../reducer/';
import { NavLink } from 'react-router-dom';


export class PageMaker extends Component{
  constructor(props) {
    super(props)
    this.state = {
      uploadedFiles: false
    };
  }
    render() {
console.log('props?', this.props)
const props = this.props
const currFurId =  props.match.params.furbabyId
const pageid = props.match.params.pageId
const pageArr = Object.keys(props.fbs[currFurId].Pages)
const pageidarrtest = props.fbs[currFurId].Pages[pageid].images
let pageidarr;
typeof pageidarrtest !== 'object' ? pageidarr = null :
 pageidarr = Object.keys(pageidarrtest)



console.log('pageidarr', pageidarr)
      return (
    <div className='app'>

          <h1 className="big-text">Let's Get Scrapbooking! Upload Some Photos for {props.fbs[currFurId].fbName}'s New Page </h1>
          <div className='drop-wrapper'>
          <Dropzone
          multiple={true}
          accept="image/*"
          onDrop={(files) => props.addImage(files[0], 'd53bod1b', currFurId, pageid)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>

          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={(files) => props.addImage(files[0], 'jwsfhasx', currFurId, pageid)}>
            <p>Drop an image or click to select a file to upload with a black and white filter.</p>
          </Dropzone>

          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={(files) => props.addImage(files[0], 'a3tpor8y', currFurId, pageid)}>
            <p>Drop an image or click to select a file to upload with a cartoon filter.</p>
          </Dropzone>
          </div>
        <div>
      <div className="FileUpload">
      <NavLink to={`/scrapbook/${currFurId }/page/${pageid}`} style={{ textDecoration: 'none' }}>Done! Take me to the new page!</NavLink>
      {
        <div>
          {pageidarr === null ? null : pageidarr.map(page => {
            const imageobj =  props.fbs[currFurId].Pages[pageid].images;
            return(
          <div key={page}>
            <p>{imageobj[page].original_filename
            }</p>
            <img src={imageobj[page].secure_url} />
          </div>
          )})}
        </div>
        }
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

export default withRouter(connect(mapState, mapDispatch)(PageMaker))
