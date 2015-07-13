
'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import React from 'react/addons';
import EditView from './EditView';
/**
	
*/
let View = React.createClass({
	render:function(){
		return (<img src="images/chart_stacked_area.png" />);
	}
});

FormbuilderStore.registerField('chart_stacked_area', {
	View: View,
	Edit: EditView
});
