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
const imageobj = (props.fbs[currFurId].Pages[pageid]? props.fbs[currFurId].Pages[pageid].images : null)
const pageidarr = (imageobj ? Object.keys(props.fbs[currFurId].Pages[pageid].images) : [])
console.log('pageid', pageid)
      return (
    <div className='app'>
        <div className='wrapper'>
          <h1>Scrapbook Time!</h1>
          <NavLink to={`/pagemaker/${currFurId }`} style={{ textDecoration: 'none' }}>Make a new page</NavLink>
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

        <div>
      <div className="FileUpload">
      {
        <div>
          {pageidarr === [] ? null : pageidarr.map(page => {
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
