'use strict';
import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import Grid from './Grid';
import GridInner from './GridInner';
import ViewFieldView from './ViewFieldView';
import RowLayout from './RowLayout';

/**
 右侧视图组件
*/
let RightView = React.createClass({
	// 监听 数据
	mixins: [Reflux.listenTo(AppStore, 'onStatusChange')],
	// 初始化 状态 数据
	getInitialState: function() {
		return {
			bootstrapData:[]
		};
	},
	// 数据源 发生变化的时候
	onStatusChange:function(data){
		this.setState({
			bootstrapData: data.bootstrapData
		});
	},
	// 组件装载的时候
	componentDidMount: function() {
		AppActions.getAll();
	},
	render : function(){
		let nodatahtml = (<div className='fb-no-response-fields'>No response fields</div>);
		if(this.state.bootstrapData.length > 0){
			nodatahtml = '';
		}
		let viewnodes = [];
		this.state.bootstrapData.map(item => {
			let columns = [];
			// 将布局的样式属性
			// let stylecss = {};
			// stylecss.minHeight = item.
			item.columns.map(column =>{
				// 每列容器的样式
				let stylecss = {};
				stylecss.minHeight = column.properties.minheight;
				stylecss.col = column.properties.col;
				let viewfieldviews = [];
				column.fields.map(function(field){
					viewfieldviews.push(<ViewFieldView {...field}/>);
				});
				columns.push(<GridInner {...stylecss}> {viewfieldviews} </GridInner>);
			});
			viewnodes.push(
				<Grid cid={item.cid} >
					{columns}
				</Grid>
			);
		});
		return (
			<div className='fb-right'>
				{nodatahtml}
				<RowLayout >
					{viewnodes}
				</RowLayout>
			</div>

		);
	}
});
export default RightView;
