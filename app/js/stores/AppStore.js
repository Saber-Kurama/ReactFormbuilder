'use strict';
import React from 'react';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';

let AppStore = Reflux.createStore({
	data:{
		currentEdit:{
			isEdit:false,
			view:null
		},
		bootstrapData:[
			{
				"label": "Please enter your clearance number",
				"field_type": "text",
				"required": true,
				"field_options": {},
				"cid": "c6"
			}		
		]
	},
	init:function(){
		this.listenToMany(AppActions);
	},
	onGetAll:function(){
		this.trigger(this.data);
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
