'use strict';
import React, {PropTypes}from 'react';
import FBConst from '../stores/FBConst';
import FormbuilderStore from '../stores/FormbuilderStore';
import AppActions from '../actions/AppActions';
import {FloatingActionButton} from 'material-ui';

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
			<div className='compontctrl-wrapper'>
				<FloatingActionButton onClick={this.delCommpont} iconClassName='fa fa-minus-circle' mini={true}/>
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
	},
	delCommpont:function(cid){
		event.stopPropagation();
		AppActions.delCommpont(this.props.cid);
	}
});
export default ViewFieldView;
