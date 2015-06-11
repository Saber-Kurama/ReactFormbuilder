import React from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import ViewFieldView from './ViewFieldView';

const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
  }
};

let ViewFieldViewList = React.createClass({

	render: function() {
		let viewFieldViews = [];
		this.props.list.map(function(data){
			viewFieldViews.push(<ViewFieldView {...data}/>);
		});
		return (
			<div className='fb-response-fields'>
					{viewFieldViews}
			</div>
		);
	}

});

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(ViewFieldViewList);
