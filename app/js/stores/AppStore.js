'use strict';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';
import FBConst from './FBConst';
import FormbuilderStore from './FormbuilderStore';

let AppStore = Reflux.createStore({
	data:{
		currentEdit:{
			isEdit:false,
			view:null
		},
		bootstrapData:[
			{
				type:'row',
				code:'row1',
				htmltemplate:'',
				icon:'',
				ilevel:'',
				name:'一列布局',
				ordernum:0,
				parentelemen:'root',
				showhide:1,
				properties:{
					minheight:80,
					cols:'12'
				},
				cid:'001',
				columns:[
					{
						type:'column',
						properties:{
							minheight:80,
							col:12
						},
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
				code:'row2',
				stylecss:{
					minHeight:50
				},
				htmltemplate:'',
				icon:'',
				ilevel:'',
				name:'两列布局',
				ordernum:0,
				parentelemen:'root',
				showhide:1,
				properties:{
					minheight:80,
					cols:'6,6'
				},
				cid:'002',
				columns:[
					{
						type:'column',
						properties:{
							minheight:80,
							col:6
						},
						fields:[
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c61'
							},
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c62'
							}
						]
					},
					{
						type:'column',
						properties:{
							minheight:80,
							col:6
						},
						fields:[
							{
								'label': 'Please enter your clearance number',
								'field_type': 'text',
								'required': true,
								'field_options': {},
								'cid': 'c63'
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
		let view = this.findViewByCid(viewid);
		this.data.currentEdit.isEdit = true;
		this.data.currentEdit.view = view;
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
	},
	onAddRow:function(item){
		let row = FormbuilderStore.findCommonByTypeCode(item.type, item.code);
		this.createColumns(row); // 对象传递
		this.data.bootstrapData.push(row);
		this.trigger(this.data);
	},
	// 根据 布局 组件来创建 列组件（临时创建的，不存数据库中的，辅助布局组件）的属性
	createColumns:function(row){
		let cols = row.properties.cols.split(',');
		row.columns = [];
		for(let i = 0; i < cols.length; i++){
			let column = {
				type:'column',
				properties:{},
				fields:[]
			};
			// 列组件 的属性复制
			column.properties.minheight = row.properties.minheight;
			column.properties.col = parseInt(cols[i]);
			row.columns.push(column);
		}
	},
	// 根据 cid 查找相应地view或者grid
	findViewByCid:function(cid){
		// 先做 全部遍历  后面可以修改 row 的cid 以row 开始 组件的cid以所属的row地id开始
		let view = null;
		for(let i = 0; i < this.data.bootstrapData.length; i++){
			let isfind = false;
			if(this.data.bootstrapData[i].cid === cid){
				view = this.data.bootstrapData[i];
				isfind = true;
			}
		}
		return view;
	}
});

export default AppStore;
