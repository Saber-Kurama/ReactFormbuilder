'use strict';
import React, { PropTypes }from 'react';
import DragBtn from './DragBtn';

let AddFieldTabView = React.createClass({
	propTypes:{
		
	},
	render : function(){
		let buttons = [];
		for (let keyvalue in this.props.inputFields){
			console.log(keyvalue);
			buttons.push(
				<DragBtn name={keyvalue} />
			);
		}
		return (
			<div className='fb-add-field-types'>
				<div className='section'>
					{buttons}
				</div>
				<div className='section'>
				</div>
			</div>
		);
	}
});
export default AddFieldTabView;
