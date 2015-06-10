'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import FBConst from '../stores/FBConst';
import React from 'react';
let TextView = React.createClass({
	getIntialState:function(){
		//this.state.value
	},
	render:function(){
		let inputClassName = 'rf-size-' + this.props[FBConst.mappings.SIZE];
		return (<input type='text' className={inputClassName} />);
	}
});
FormbuilderStore.registerField('text', {
	order: 0,
	View: TextView
});

