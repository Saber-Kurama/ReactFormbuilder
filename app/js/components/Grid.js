import React, {PropTypes} from 'react';
import AppActions from '../actions/AppActions';
let Grid = React.createClass({
	propTypes:{
		cid:PropTypes.string.isRequired
	},
	render: function() {
		return (
			<div className="row" style={{marginBottom:5}} >
				<div className="container-fluid grid-wrapper" onClick={this.focusEditView}>
					<div className='cover'></div>
					{this.props.children}
					<div className='grid-actions-wrapper'>
						<a className="js-duplicate fb-button" title="Duplicate Field"><i className='fa fa-plus-circle'></i></a>
						<a className="js-clear fb-button" title="Remove Field"><i className='fa fa-minus-circle'></i></a>
					</div>
				</div>
			</div>
		);
	},
	focusEditView:function(event){
		console.log('布局点解');
		event.stopPropagation();
		AppActions.createAndShowEditView(this.props.cid);
	}

});

export default Grid;
