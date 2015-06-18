'use strict';
import React, {PropTypes} from 'react';
import EditBase from './EditBase';
import FormbuilderStore from '../stores/FormbuilderStore';
let EditFieldView = React.createClass({
	propTypes:{
		view:PropTypes.object
	},
	render : function(){
		let editview = (<div />);
		if(this.props.view){
			console.log(this.props.view.code);
			console.log(FormbuilderStore.fields);
			let EditView = FormbuilderStore.fields[this.props.view.code].Edit;
			editview = (<EditView />);
		}
		return (
			<div>{editview}</div>
		);
	}
});
export default EditFieldView;
