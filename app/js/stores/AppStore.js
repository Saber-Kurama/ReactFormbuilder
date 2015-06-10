'use strict';
import React from 'react';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';

let bootstrapData = [
		{
			"label": "Please enter your clearance number",
			"field_type": "text",
			"required": true,
			"field_options": {},
			"cid": "c6"
		}
];

let AppStore = Reflux.createStore({
	data:{
		currentEdit:{
			isEdit:false,
			view:null			
		},
		bootstrapData:[
		]
	},
	init:function(){
		this.listenToMany(AppActions);
	},
	getBootstrapData:function(){
		return {bootstrapData};
	},
	onGetCurrentEdit:function(){
		this.trigger(this.data);
	},
	onCreateAndShowEditView:function(){
		this.data.currentEdit.isEdit = true;
		this.trigger(this.data);
	}
});

export default AppStore;
