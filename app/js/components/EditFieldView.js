'use strict';
import React, {PropTypes} from 'react';
import FormbuilderStore from '../stores/FormbuilderStore';
import _ from 'lodash';

let EditFieldView = React.createClass({
	propTypes:{
		view:PropTypes.object,
		changeView:PropTypes.func
	},
	render : function(){
		let editview = (<div />);
		if(this.props.view){
			let EditView = FormbuilderStore.fields[this.props.view.code].Edit;
			let compont = FormbuilderStore.findCompontByTypeCode(this.props.view.type, this.props.view.code);
			let properties = [];
			for(let i = 0; i < compont.properties.length; i++){
				compont.properties[i].value = this.props.view.properties[compont.properties[i].codestr];
				properties.push(compont.properties[i]);
			}
			// 如果 没有 key 会产生错误
			let keyvalue = _.uniqueId('keyvalue_');
			editview = (<EditView properties={properties} key={keyvalue} changeProperties={this.changeProperties}/>);
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
				view.columns[c].properties.minheight = parseInt(view.properties.minheight);
				view.columns[c].properties.col = parseInt(cols[c]);
			}
		}
		this.props.changeView(view);
	}
});
export default EditFieldView;
