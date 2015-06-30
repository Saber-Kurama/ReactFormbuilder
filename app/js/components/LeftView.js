'use strict';
import React from 'react/addons';
import Reflux from 'reflux';
import AddFieldTabView from './AddFieldTabView';
import EditFieldView from './EditFieldView';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import FormbuilderStore from '../stores/FormbuilderStore';


let LeftView = React.createClass({
	propTypes:{

	},
	mixins: [Reflux.listenTo(AppStore, 'onStatusChange'), Reflux.listenTo(FormbuilderStore, 'getComponts')],
	getInitialState:()=>{
		return {
			isEdit:false,
			inputFields:[],
			view:null
		};
	},
	onStatusChange:function(data){
		this.setState({
			isEdit: data.currentEdit.isEdit,
			view:data.currentEdit.view
		});
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
			<div className='fb-left' >
				<ul className='fb-tabs'>
					<li className={addliclass} ><a data-target='#addField' onClick={this.showAddTab}>Add new field</a></li>
					<li className={editliclass} ><a data-target='#editField' onClick={this.showEditTab} >Edit field</a></li>
				</ul>

				<div className='fb-tab-content'>
					<div className={addfieldclass} id='addField'>
						<AddFieldTabView inputFields = {this.state.inputFields} />
					</div>
					<div className={editfieldclass} id='editField'>
						<div className='fb-edit-field-wrapper'>
							<EditFieldView view={this.state.view} changeView={this.changeView}/>
						</div>
					</div>
				</div>
			</div>
		);
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
