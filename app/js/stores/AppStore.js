'use strict';
import React from 'react';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';
import FBConst from './FBConst';

let AppStore = Reflux.createStore({
	data:{
		currentEdit:{
			isEdit:false,
			view:null
		},
		bootstrapData:[
			{
				type:'row',
				columns:[
					{
						type:'column',
						fields:[
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c6'
							}
						]
					}
				]
			},
			{
				type:'row',
				columns:[
					{
						type:'column',
						fields:[
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c6'
							}
						]
					},
					{
						type:'column',
						fields:[
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c6'
							}
						]
					}
				]
			}
			// {
			// 	'label': 'Please enter your clearance number',
			// 	'field_type': 'text',
			// 	'required': true,
			// 	'field_options': {},
			// 	'cid': 'c6'
			// }
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
	onCreateAndShowEditView:function(viewid){
		this.data.currentEdit.isEdit = true;
		this.trigger(this.data);
	},
	onCreate:function(type){
      	let newdata = {};
		newdata[FBConst.mappings.LABEL] = 'Untitled';
		newdata[FBConst.mappings.FIELD_TYPE] = type;
		newdata[FBConst.mappings.REQUIRED] = true;
		newdata['field_options'] = {};
		this.data.bootstrapData.push(newdata);
		this.trigger(this.data);
	}
});

export default AppStore;
