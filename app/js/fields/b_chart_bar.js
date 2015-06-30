'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import React from 'react/addons';
import EditView from './EditView';
/**
	一列布局组件
*/
let Row2View = React.createClass({
	render:function(){
		return (<img src="images/chart_standard_bar_graph.png" />);
	}
});

FormbuilderStore.registerField('b_chart_bar', {
	View: Row2View,
	Edit: EditView
});
