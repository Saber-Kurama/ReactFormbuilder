'use strict';
import React from 'react';
import Reflux from 'reflux';
import Dustbin from './Dustbin';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import ViewFieldViewList from './ViewFieldViewList';
import Grid from './Grid';
import GridInner from './GridInner';
import ViewFieldView from './ViewFieldView';

/**
 右侧视图组件
*/
let RightView = React.createClass({
	// 监听 数据
	mixins: [Reflux.listenTo(AppStore,'onStatusChange')],
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
			nodatahtml = "";
		}
		let viewnodes = [];
		this.state.bootstrapData.map(item => {
			let columns = [];
			item.columns.map(column =>{
				let viewfieldviews = [];
				column.fields.map(function(field){
					viewfieldviews.push(<ViewFieldView {...field}/>);
				});
				columns.push(<GridInner> {viewfieldviews} </GridInner>);
			});
			viewnodes.push(
				<Grid >
					{columns}
				</Grid>
			);
		});
		return (
			<div className='fb-right'>
				{nodatahtml}
				
				{viewnodes}
			</div>

		);
	}
});
export default RightView;
