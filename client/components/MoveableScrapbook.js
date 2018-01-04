
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import DNDBOX from './DNDBOX'
import { compose } from 'redux'

const style = {
  position: 'absolute',
  height: 200,
  width: 200,
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	cursor: 'move',
}

const boxSource = {
	beginDrag(props) {
		const { id, left, top, title } = props
		return { id, left, top, title }
	},
}

class MoveableScrapbook extends Component {
  static get propTypes() {
    return {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		id: PropTypes.any.isRequired,
		left: PropTypes.number.isRequired,
		top: PropTypes.number.isRequired,
		children: PropTypes.node,
  }}

  render() {
		const {
			hideSourceOnDrag,
			left,
			top,
			connectDragSource,
			isDragging,
			children,
		} = this.props
		if (isDragging && hideSourceOnDrag) {
			return null
		}

		return connectDragSource(
			<div style={{ ...style, left, top }}>{children}</div>,
		)
	}
}
export default DragSource(DNDBOX.BOX, boxSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(MoveableScrapbook)
