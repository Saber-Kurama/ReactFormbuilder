'use strict';
import React from 'react';
import Reflux from 'reflux';
import Dustbin from './Dustbin';
import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';
import ViewFieldViewList from './ViewFieldViewList';

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
		console.log(this.props);
		let nodatahtml = (<div className='fb-no-response-fields'>No response fields</div>);
		if(this.state.bootstrapData.length > 0){
			nodatahtml = "";
		}
		return (
			<div className='fb-right'>
				{nodatahtml}
				<ViewFieldViewList list={this.state.bootstrapData} />
			</div>

		);
	}
});
export default RightView;
