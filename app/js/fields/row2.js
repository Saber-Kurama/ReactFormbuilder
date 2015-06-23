'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import FBConst from '../stores/FBConst';
import React from 'react/addons';
import EditView from './EditView';
/**
	一列布局组件
*/
let Row2View = React.createClass({
	render:function(){
		let inputClassName = 'rf-size-' + this.props[FBConst.mappings.SIZE];
		return (<input type='text' className={inputClassName} />);
	}
});

FormbuilderStore.registerField('row2', {
	View: Row2View,
	Edit: EditView
});

