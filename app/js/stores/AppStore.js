'use strict';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';
import FBConst from './FBConst';
import FormbuilderStore from './FormbuilderStore';
import _ from 'lodash';

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

						]
					},
					{
						type:'column',
						properties:{
							minheight:80,
							col:6
						},
						fields:[

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
	//展示 编辑视图
	onCreateAndShowEditView:function(viewid){
		let view = this.findViewByCid(viewid);
		this.data.currentEdit.isEdit = true;
		this.data.currentEdit.view = view;
		this.trigger(this.data);
	},
	// 添加一个组件
	onCreate:function(item, dropResult){
		// let newdata = {};
		// newdata[FBConst.mappings.LABEL] = 'Untitled';
		// newdata[FBConst.mappings.FIELD_TYPE] = item.type;
		// newdata[FBConst.mappings.REQUIRED] = true;
		// newdata['field_options'] = {};
		console.log(item.type + '========' + item.code);
		let compont = FormbuilderStore.findCompontByTypeCode(item.type, item.code);
		let newcompont = _.cloneDeep(compont);
		console.log(newcompont);
		//newcompont[FBConst.mappings.LABEL] = 'Untitled';
		//newcompont[FBConst.mappings.FIELD_TYPE] = item.code;
		//newcompont[FBConst.mappings.REQUIRED] = true;
		newcompont.properties = {};
		for(let i = 0; i < compont.properties.length; i++){
			newcompont.properties[compont.properties[i].codestr] = compont.properties[i].defaultvalue;
		}
		this.data.bootstrapData[dropResult.rowindex].columns[dropResult.colindex].fields.push(newcompont);
		//this.data.bootstrapData.push(newdata);
		this.trigger(this.data);
	},
	onAddRow:function(item){
		let row = FormbuilderStore.findCompontByTypeCode(item.type, item.code);
		this.createColumns(row); // 对象传递
		this.data.bootstrapData.push(row);
		this.trigger(this.data);
	},
	// editview 属性发生改变
	onChangeView:function(view){
		console.log('xiugai--');
		this.data.currentEdit.view = view;
		//
		let oldview = this.setViewByCid(view.cid,view);
		console.log(this.data.bootstrapData);
		this.trigger(this.data);
	},
	// 根据 布局 组件来创建 列组件（临时创建的，不存数据库中的，辅助布局组件）的属性
	createColumns:function(row){
		let colsstr = '12';
		let rowprops = {};
		for(let p = 0; p < row.properties.length; p++){
			if(row.properties[p].codestr === 'cols'){
				console.log(row.properties[p].defaultvalue);
				colsstr = row.properties[p].defaultvalue;
			}
			rowprops[row.properties[p].codestr] = row.properties[p].defaultvalue;
			
		}
		let cols = colsstr.split(',');
		row.columns = [];
		for(let i = 0; i < cols.length; i++){
			let column = {
				type:'column',
				properties:{},
				fields:[]
			};
			// 列组件 的属性复制 这两句式硬编码   目前先这样  因为行和列的 属性的关系还没有考虑太多
			column.properties.minheight = rowprops.minheight;
			column.properties.col = parseInt(cols[i]);
			row.columns.push(column);
		}
		// 修改掉 row 的属性
		row.properties = rowprops;
		row.cid = _.uniqueId('row_');
	},
	setViewByCid:function(cid,view){
		// 先做 全部遍历 后面可以修改 row 的cid 以row开头 组件的cid以所属的row地id开始
		for(let i = 0; i < this.data.bootstrapData.length; i++){
			//let isfind = false;
			if(this.data.bootstrapData[i].cid === cid){
				this.data.bootstrapData[i] = view;
				//isfind = true;
				return true;
			}else{
				for(let c = 0; c < this.data.bootstrapData[i].columns.length; c++){
					for(let f = 0; f < this.data.bootstrapData[i].columns[c].fields.length; f++){
						if(this.data.bootstrapData[i].columns[c].fields[f].cid === cid){
							this.data.bootstrapData[i].columns[c].fields[f] = view;
							//isfind = true;
							return true;
						}
					}
				}
			}
			// if(isfind){
			// 	break;
			// }
		}
		return false;
	},
	// 根据 cid 查找相应地view或者grid
	findViewByCid:function(cid){
		// 先做 全部遍历 后面可以修改 row 的cid 以row开头 组件的cid以所属的row地id开始
		let view = null;
		for(let i = 0; i < this.data.bootstrapData.length; i++){
			//let isfind = false;
			if(this.data.bootstrapData[i].cid === cid){
				view = this.data.bootstrapData[i];
				//isfind = true;
				return view;
			}else{
				for(let c = 0; c < this.data.bootstrapData[i].columns.length; c++){
					for(let f = 0; f < this.data.bootstrapData[i].columns[c].fields.length; f++){
						if(this.data.bootstrapData[i].columns[c].fields[f].cid === cid){
							view = this.data.bootstrapData[i].columns[c].fields[f];
							//isfind = true;
							return view;
						}
					}
				}
			}
			// if(isfind){
			// 	break;
			// }
		}
		return view;
	}
});

export default AppStore;
