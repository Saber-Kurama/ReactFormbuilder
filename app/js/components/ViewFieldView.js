'use strict';
import React, {PropTypes}from 'react';
import FBConst from '../stores/FBConst';
import FormbuilderStore from '../stores/FormbuilderStore';
import AppActions from '../actions/AppActions';

let ViewFieldView = React.createClass({
	propTypes:{
		code:PropTypes.string,
		cid:PropTypes.string
	},
	render : function(){
		let label = (
			<label>
				<span>组件</span>
			</label>
		);
		let description = (
			<span className='help-block'>
			description
			</span>
		);
		let View = FormbuilderStore.fields[this.props.code].View;
		let btrclass = 'js-clear ' + FBConst.options.BUTTON_CLASS;
		let duplicateRemove = (
			<div className='actions-wrapper'>
				<a className="js-duplicate fb-button" title="Duplicate Field"><i className='fa fa-plus-circle'></i></a>
				<a className={btrclass} title="Remove Field"><i className='fa fa-minus-circle'></i></a>
			</div>
		);
		return (
			<div className='fb-field-wrapper' >
				<div className='subtemplate-wrapper' onClick={this.focusEditView}>
					<div className='cover'></div>
					
					<View {...this.props}/>
					
					{duplicateRemove}
				</div>
			</div>
		);
	},
	focusEditView:function(event){
		event.stopPropagation();
		AppActions.createAndShowEditView(this.props.cid);
	}
});
export default ViewFieldView;
