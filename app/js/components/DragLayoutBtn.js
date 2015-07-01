import React, { PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';
import AppActions from '../actions/AppActions';
import mui, {RaisedButton} from 'material-ui';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
      type:props.type,
      code:props.code
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      //window.alert(`You dropped ${item.name} into ${dropResult.name}!`);
      AppActions.addRow(item);
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
let DragLayoutBtn = React.createClass({
	propTypes:{
		connectDragSource: PropTypes.func.isRequired,
		//isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired
	},
	render: function() {
		const { isDragging, connectDragSource } = this.props;
		const { name, columns} = this.props;
		return (
			connectDragSource(
				/*a data-field-type={name} className="fb-button ui-draggable">{name}</a>*/
        <RaisedButton data-field-type={name} label={name} style={{width:'140px', margin:5}}/>
			)
		);
	}

});

export default DragSource(ItemTypes.LAYOUT, boxSource, collect)(DragLayoutBtn);

