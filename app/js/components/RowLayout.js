import React from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';

// 用来 放置 row 组件
const boxTarget = {
  drop() {
    return { name: 'RowLayout' };
  }
};

let RowLayout = React.createClass({
	render:function(){
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    let isactiveshow = '';
    if (isActive) {
      isactiveshow = (<a className='sortable-placeholder'></a>);

    }

    return connectDropTarget(
      <div className='fb-response-fields'>
		{this.props.children}
        {isactiveshow}
      </div>
    );
	}
});
export default DropTarget(ItemTypes.LAYOUT, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(RowLayout);

// let RowLayout = React.createClass({

// 	render: function() {
// 		return (
// 			<div />
// 		);
// 	}

// });

// export default  RowLayout;
