'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import React from 'react/addons';
import EditView from './EditView';
/**
	
*/
let View = React.createClass({
	render:function(){
		return (<img src="images/chart_standard_pie.png" />);
	}
});

FormbuilderStore.registerField('chart_standard_pie', {
	View: View,
	Edit: EditView
});