'use strict';
import React from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
// 定义 一个 对象
const boxTarget = {
  drop(props) {
    return {
		rowindex: props.rowindex,
		colindex: props.colindex
    };
  }
};

let DropCompontDiv = React.createClass({

	render: function() {
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		let isactiveshow = '';
		if (isActive) {
			isactiveshow = (<a className='sortable-placeholder'></a>);
		}
		return connectDropTarget(
			<div className='fb-response-fields' style={{minHeight:10}}>
				{this.props.children}
				{isactiveshow}
			</div>
		);
	}


});

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(DropCompontDiv);
