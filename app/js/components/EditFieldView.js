'use strict';
import React, {PropTypes} from 'react';
import FormbuilderStore from '../stores/FormbuilderStore';
import _ from 'lodash';
import InputData from './InputData';

let EditFieldView = React.createClass({
	propTypes:{
		view:PropTypes.object,
		changeView:PropTypes.func
	},
	componentDidMount: function() {
		if(this.props.view){
			this.oldviewcid= this.props.view.cid;
		}
		
	},
	render : function(){
		console.log('编辑视图--------------');
		let editview = (<div />);
		if(this.props.view){
			console.log(this.props.view.code);
			let EditView = FormbuilderStore.fields[this.props.view.code].Edit;
			let compont = FormbuilderStore.findCompontByTypeCode(this.props.view.type, this.props.view.code);
			let properties = [];
			for(let i = 0; i < compont.properties.length; i++){
				compont.properties[i].value = this.props.view.properties[compont.properties[i].codestr];
				properties.push(compont.properties[i]);
			}
			// 如果 视图 类别更换后  修改key值
			if(this.oldviewcid != this.props.view.cid){
				console.log('产生key');
				this.oldviewcid  = this.props.view.cid;
				let keyvalue = _.uniqueId('keyvalue_');
				this.editkey = keyvalue;
				editview = (<EditView properties={properties} key={keyvalue} changeProperties={this.changeProperties}/>);
			}else{
				console.log('没有key')
				editview = (<EditView properties={properties}  key={this.editkey} changeProperties={this.changeProperties}/>);				
			}

		}
		return (
			<div>
			{editview}
			</div>
		);
	},
	changeProperties:function(properties){
		let view = {};
		view = _.cloneDeep(this.props.view);
		//Object.assign(view, this.props.view);
		//Object.assign(view.properties, properties);
		view.properties = _.cloneDeep(properties);
		if(view.type === 'row'){
			let cols = view.properties.cols.split(',');
			for(let c = 0; c < view.columns.length; c++){
				view.columns[c].properties.minheight = parseInt(properties.minheight);
				view.columns[c].properties.col = parseInt(cols[c]);
			}
		}
		this.props.changeView(view);
	}
});
export default EditFieldView;
