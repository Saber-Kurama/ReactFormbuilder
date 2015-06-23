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
			console.log(this.props.view);
			console.log(FormbuilderStore.fields);
			let EditView = FormbuilderStore.fields[this.props.view.code].Edit;
			let commont = FormbuilderStore.findCommonByTypeCode(this.props.view.type,this.props.view.code);
			let properties = [];
			for(let i = 0; i < commont.properties.length; i++){
				commont.properties[i].value = this.props.view.properties[commont.properties[i].codestr];
				properties.push(commont.properties[i]);
			}
			editview = (<EditView properties={properties} changeProperties={this.changeProperties}/>);
		}
		return (
			<div>
			{editview}
			</div>
		);
	},
	changeProperties:function(properties){
		console.log('修改了属性');
		let view = {};
		Object.assign(view,this.props.view);
		Object.assign(view.properties,properties);
		console.log(view);
		if(view.type == 'row'){
			let cols = view.properties.cols.split(',');
			for(let c = 0; c < view.columns.length; c++){
				view.columns[c].properties.minheight = parseInt(view.properties.minheight);
				view.columns[c].properties.col = parseInt(cols[c]);
			}
		}
		console.log(view);
		this.props.changeView(view);
	}
});
export default EditFieldView;
