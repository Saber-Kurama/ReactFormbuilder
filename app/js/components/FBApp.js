'use strict';
import React from 'react';
import BuilderView from './BuilderView';
import FormbuilderStore from '../stores/FormbuilderStore';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import mui, {AppBar} from 'material-ui';
let ThemeManager = new mui.Styles.ThemeManager();

let FBApp = React.createClass({
	// getDefaultProps:function(){
	// 	return {
	// 		inputFields:
	// 	};
	// },
	childContextTypes:{
		muiTheme: React.PropTypes.object
	},
	getChildContext(){
		return{
			muiTheme:ThemeManager.getCurrentTheme()
		}
	},
	render:function(){
		let inputFields = FormbuilderStore.inputFields;
		return (
			<div>
				<AppBar title='报表设计工具' style={{position:"fixed"}} />
				<BuilderView inputFields={inputFields} />
			</div>
		);
	}
});
export default DragDropContext(HTML5Backend)(FBApp);
