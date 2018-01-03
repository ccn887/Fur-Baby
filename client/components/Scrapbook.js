import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Dropzone from 'react-dropzone';
import request from 'superagent'
import { addAlbum, addImage } from '../reducer/scrapbook';

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
      return (
    <div className='app'>
      <header>
        <div className='wrapper'>
          <h1>Scrapbook Time!</h1>

          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={(files) => props.addImage(files[0])}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>

        <div>
      <div className="FileUpload">
        ...
      </div>
{
      <div>
        {props.scrapbook === [] ? null : props.scrapbook.map(page => {
          return(
        <div key={page.id}>
          <p>{page.original_filename
          }</p>
          <img src={page.secure_url} />
        </div>
        )})}
      </div>
      }
    </div>
    </div>
    </header>
</div> )
}
}

const mapState = (state) => {
  return {
    scrapbook: state.scrapbook,
  }
}
const mapDispatch = { addAlbum, addImage };

export default withRouter(connect(mapState, mapDispatch)(Scrapbook))

