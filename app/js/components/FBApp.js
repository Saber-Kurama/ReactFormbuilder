'use strict';
import React from 'react';
import BuilderView from './BuilderView';
import FormbuilderStore from '../stores/FormbuilderStore';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
let FBApp = React.createClass({
	// getDefaultProps:function(){
	// 	return {
	// 		inputFields:
	// 	};
	// },
	render:function(){
		let inputFields = FormbuilderStore.inputFields;
		return (
			<BuilderView inputFields={inputFields} />
		);
	}
});
export default DragDropContext(HTML5Backend)(FBApp);
