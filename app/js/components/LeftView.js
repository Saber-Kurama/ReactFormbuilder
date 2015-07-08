'use strict';
import React from 'react/addons';
import Reflux from 'reflux';
import AddFieldTabView from './AddFieldTabView';
import EditFieldView from './EditFieldView';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import FormbuilderStore from '../stores/FormbuilderStore';
import mui, {Tabs, Tab} from 'material-ui';

let LeftView = React.createClass({
	propTypes:{

	},
	mixins: [Reflux.listenTo(AppStore, 'onStatusChange'), Reflux.listenTo(FormbuilderStore, 'getComponts')],
	getInitialState:()=>{
		return {
			isEdit:false,
			tabindex:0,
			inputFields:[],
			view:null
		};
	},
	onStatusChange:function(data){
		let tabindex = this.state.isEdit ? 1 : 0;
		this.setState({
			tabindex: tabindex,
			isEdit: data.currentEdit.isEdit,
			view:data.currentEdit.view
		});
		// 修改组件的状态 
		console.log('=====修改组件的状态=======');
		// console.log(this.refs.leftTabs.state);
		 this.refs.leftTabs.setState({
		 	selectedIndex:tabindex
		 })
	},
	getComponts:function(data){
		this.setState({
			inputFields:data
		});
	},
	componentWillMount: function() {
		AppActions.getComponts();
	},
	componentDidMount: function() {
		AppActions.getCurrentEdit();
	},
	render : function(){
		console.log("===========左侧视图====================");
		let cx = React.addons.classSet;
		let addliclass = cx({
			'active':!this.state.isEdit
		});
		let editliclass = cx({
			'active':this.state.isEdit
		});
		let addfieldclass = cx({
			'fb-tab-pane' : true,
			'active': !this.state.isEdit
		});
		let editfieldclass = cx({
			'fb-tab-pane' : true,
			'active': this.state.isEdit
		});
		
		return (
			<Tabs  ref="leftTabs" initialSelectedIndex={this.state.tabindex} >
				<Tab label='添加新组件'>
					<AddFieldTabView inputFields = {this.state.inputFields} />
				</Tab>
				<Tab label='编辑组件'>
					<EditFieldView view={this.state.view} changeView={this.changeView}/>
				</Tab>
			</Tabs>
		);
		// return (
		// 	<div className='fb-left' >
		// 		<ul className='fb-tabs'>
		// 			<li className={addliclass} ><a data-target='#addField' onClick={this.showAddTab}>Add new field</a></li>
		// 			<li className={editliclass} ><a data-target='#editField' onClick={this.showEditTab} >Edit field</a></li>
		// 		</ul>

		// 		<div className='fb-tab-content'>
		// 			<div className={addfieldclass} id='addField'>
		// 				<AddFieldTabView inputFields = {this.state.inputFields} />
		// 			</div>
		// 			<div className={editfieldclass} id='editField'>
		// 				<div className='fb-edit-field-wrapper'>
		// 					<EditFieldView view={this.state.view} changeView={this.changeView}/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
	},
	showAddTab:function(){
		this.setState({
			isEdit:false
		});
	},
	showEditTab:function(){
		this.setState({
			isEdit:true
		});
	},
	changeView:function(view){
		console.log('修改了view对象');
		AppActions.changeView(view);
	}
});
export default LeftView;
