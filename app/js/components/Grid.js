import React, {PropTypes} from 'react';
import AppActions from '../actions/AppActions';
import {Paper, FloatingActionButton} from 'material-ui';
let Grid = React.createClass({
	propTypes:{
		cid:PropTypes.string.isRequired
	},
	render: function() {
		return (
			<div className="row" style={{marginBottom:5}} >
				<div className="container-fluid " onClick={this.focusEditView}>
					<div className='cover'></div>
					{this.props.children}
					<div className='grid-wrapper'>
						<FloatingActionButton onClick={this.delGrid} iconClassName='fa fa-minus-circle' mini={true}/>
					</div>
				</div>
			</div>
		);
		// return (
		// 	<div className="row" style={{marginBottom:5}} >
		// 		<div className="container-fluid grid-wrapper" onClick={this.focusEditView}>
		// 			<div className='cover'></div>
		// 			{this.props.children}
		// 			<div className='grid-actions-wrapper'>
		// 				<a className="js-duplicate fb-button" title="Duplicate Field"><i className='fa fa-plus-circle'></i></a>
		// 				<a className="js-clear fb-button" title="Remove Field"><i className='fa fa-minus-circle'></i></a>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
	},
	focusEditView:function(event){
		console.log('开始编辑视图');
		event.stopPropagation();
		AppActions.createAndShowEditView(this.props.cid);
	},
	delGrid:function(event){
		console.log('删除一行');
		event.stopPropagation();
		AppActions.delGrid(this.props.cid);
	}

});

export default Grid;
