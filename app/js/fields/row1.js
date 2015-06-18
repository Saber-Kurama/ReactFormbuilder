'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import FBConst from '../stores/FBConst';
import React from 'react';
/**
	一列布局组件
*/
let Row1View = React.createClass({
	render:function(){
		let inputClassName = 'rf-size-' + this.props[FBConst.mappings.SIZE];
		return (<input type='text' className={inputClassName} />);
	}
});
/**
	一列布局 编辑 视图
*/
let Row1EditView = React.createClass({
	getInitialState: function() {
		return {
			minheight: 80,
			cols:'12' 
		};
	},
	render:function(){
		console.log(this.state.minheight);
		return (
			<div >布局1编辑视图
				<input value ={this.state.minheight} />
			</div>
		);
	}
});
FormbuilderStore.registerField('row1', {
	View: Row1View,
	Edit: Row1EditView
});

