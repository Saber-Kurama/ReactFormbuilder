import React, { PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';
import AppActions from '../actions/AppActions';
const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      //window.alert(`You dropped ${item.name} into ${dropResult.name}!`);
      AppActions.create(item.name);
    }
  }
};
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}
// DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// }));
let DragBtn = React.createClass({
	propTypes:{
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired
	},
	render: function() {
		const { isDragging, connectDragSource } = this.props;
		const { name } = this.props;
		return (
			connectDragSource(
				<a data-field-type={name} className="fb-button ui-draggable">{name}</a>
			)
		);
	}

});

export default DragSource(ItemTypes.BOX, boxSource, collect)(DragBtn);

