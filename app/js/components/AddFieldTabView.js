'use strict';
import React, { PropTypes }from 'react';
import DragBtn from './DragBtn';
import DragLayoutBtn from './DragLayoutBtn';
 
let AddFieldTabView = React.createClass({
	propTypes:{

	},
	render : function(){
		let buttons = [];
		for (let keyvalue in this.props.inputFields){
			buttons.push(
				<DragBtn name={keyvalue} />
			);
		}
		let layoutButtons = [];
		this.props.layoutFields.map((layout)=>{
			layoutButtons.push(
				<DragLayoutBtn name={layout} />
			);
		});
		return (
			<div className='fb-add-field-types'>
				<div className='section'>
					{layoutButtons}
				</div>
				<div className='section'>
					{buttons}
				</div>
				
			</div>
		);
	}
});
export default AddFieldTabView;
