import React from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import {Paper} from 'material-ui';

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
      isactiveshow = (<Paper className='placeholder'></Paper>);

    }

    return connectDropTarget(
      <div className='fb-response-fields container-fluid'>
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
