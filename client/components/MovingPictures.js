import React, { Component } from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { DropTarget, DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DNDBOX from './DNDBOX'
import MoveableScrapbook from './MoveableScrapbook'
import { compose } from 'redux'
import {  addImage } from '../reducer/scrapbook';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


const styles = {
	width: 1200,
	height: 1200,
	border: '1px solid black',
	position: 'relative',
}

const boxTarget = {
	drop(props, monitor, component) {
		const item = monitor.getItem()
		const delta = monitor.getDifferenceFromInitialOffset()
		const left = Math.round(item.left + delta.x)
		const top = Math.round(item.top + delta.y)
		component.moveBox(item.id, left, top)
	},
}

class MovingPictures extends Component {
  static get propTypes() {
    return {
		connectDropTarget: PropTypes.func.isRequired,
  }}
  constructor(props) {
    super(props)

  console.log('state:', props)
  this.state = {
    boxes: {
      a: {top: 20, left: 80, title: 'https://res.cloudinary.com/dygw8tvry/image/upload/v1515079068/pgmuqrrkhewpie7cqibg.jpg' },
      b: {top: 180, left: 20, title: 'http://res.cloudinary.com/dygw8tvry/image/upload/v1515079837/nn4136lcpro0szgjgizf.jpg' },
      c: { top: 90, left: 80, title: 'https://res.cloudinary.com/dygw8tvry/image/upload/v1515079068/pgmuqrrkhewpie7cqibg.jpg'},
      d: {top: 90, left: 20, title: 'https://res.cloudinary.com/dygw8tvry/image/upload/v1515079855/naigsvegtya81aisk0un.jpg'}
    }
  }
  this.handleImages = this.handleImages.bind(this)
}

moveBox(id, left, top) {
  this.setState(
    update(this.state, {
      boxes: {
        [id]: {
          $merge: { left, top },
        },
      },
    })
  )
}
render() {
  const {  connectDropTarget, scrapbook } = this.props
  const { boxes } = this.state

console.log('sb:', scrapbook)
  return connectDropTarget(
    <div style={styles}>
    <button onClick = { this.handleImages}>hi</button>

      {Object.keys(boxes).map(key => {
        const { left, top, title } = boxes[key]
        return (
          <MoveableScrapbook
            key={key}
            id={key}
            left={left}
            top={top}
            title={title}
          >
          <img src={title} />
          </MoveableScrapbook>
        )
      })}
    </div>
  )
}
handleImages(){
  console.log('props:', this.props)
  let scrapbookArr = Object.keys(this.props.scrapbook)
console.log('sbarr', scrapbookArr)
const pica = this.props.scrapbook[scrapbookArr[0]].secure_url
const picb =  this.props.scrapbook[scrapbookArr[1]].secure_url
const picc= this.props.scrapbook[scrapbookArr[2]].secure_url
// const picd=  this.props.scrapbook[scrapbookArr[3]].secure_url
console.log('pica', pica)
  this.setState({
    a: {top: 20, left: 80, title: pica},
    b: {top: 180, left: 20, title: picb},
    c: { top: 90, left: 80, title: picc}
  })
}
}
const mapState = (state) => {
  return {
    scrapbook: state.scrapbook,
  }
}
const mapDispatch = { addImage};


const enhance = compose(
    withRouter,
    connect(mapState, mapDispatch),
  DragDropContext(HTML5Backend),
  DropTarget(DNDBOX.BOX, boxTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  }))
)

export default enhance(MovingPictures)


