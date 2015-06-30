import React, { PropTypes, Component } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import ViewFieldView from './ViewFieldView';


const boxTarget = {
  drop() {
    return { name: 'ViewFieldViewList' };
  }
};

// class ViewFieldViewList extends Component {
//   render() {
//     const { canDrop, isOver, connectDropTarget } = this.props;
//     const isActive = canDrop && isOver;
//     let obj1 = {...style};
//     let backgroundColor = '#222';
//     if (isActive) {
//       backgroundColor = 'darkgreen';
//     } else if (canDrop) {
//       backgroundColor = 'darkkhaki';
//     }

//     return connectDropTarget(
//       <div style={{...style, backgroundColor}}>
//         {isActive ?
//           'Release to drop' :
//           'Drag a box here'
//         }
//       </div>
//     );
//   }
// }

let ViewFieldViewList = React.createClass({
	render:function(){
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    let isactiveshow = '';
    if (isActive) {
      isactiveshow = (<a className='sortable-placeholder'></a>);

    }
    let viewFieldViews = [];
		this.props.list.map(function(data){
			viewFieldViews.push(<ViewFieldView {...data}/>);
		});
    return connectDropTarget(
      <div className='fb-response-fields'>
        {viewFieldViews}
        {isactiveshow}
      </div>
    );
	}
});
export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(ViewFieldViewList);
