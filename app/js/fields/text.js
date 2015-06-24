'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import FBConst from '../stores/FBConst';
import React from 'react';
import EditView from './EditView';

let TextView = React.createClass({
	render:function(){
		let inputClassName = 'rf-size-' + this.props[FBConst.mappings.SIZE];
		return (
			<div>
			<span>{this.props.properties.textvalue}</span>
			<input type='text' className={inputClassName} value={this.props.properties.textvalue}/>
			</div>
		);
	}
});
FormbuilderStore.registerField('text', {
	order: 0,
	View: TextView,
	Edit:EditView
});

