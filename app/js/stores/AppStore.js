'use strict';
import Reflux from 'reflux';
import AppActions from '../actions/AppActions';
import FormbuilderStore from './FormbuilderStore';
import _ from 'lodash';
import $ from 'jquery';

let AppStore = Reflux.createStore({
	data:{
		currentEdit:{
			isEdit:false,
			view:null
		},
		bootstrapData:zyuc_config.bootstrapData
	},
	init:function(){
		//alert(zyuc_config.bootstrapData);
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
		let compont = FormbuilderStore.findCompontByTypeCode(item.type, item.code);
		let newcompont = _.cloneDeep(compont);
		//newcompont[FBConst.mappings.LABEL] = 'Untitled';
		//newcompont[FBConst.mappings.FIELD_TYPE] = item.code;
		//newcompont[FBConst.mappings.REQUIRED] = true;
		newcompont.properties = {};
		for(let i = 0; i < compont.properties.length; i++){
			newcompont.properties[compont.properties[i].codestr] = compont.properties[i].defaultvalue;
		}
		newcompont.cid = _.uniqueId('compont_');
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
		this.data.currentEdit.view = view;
		//
		this.setViewByCid(view.cid, view);
		this.trigger(this.data);
	},
	// 删除一行
	onDelGrid:function(cid){
		for(let i = 0; i < this.data.bootstrapData.length; i++){
			//let isfind = false;
			if(this.data.bootstrapData[i].cid === cid){
				console.log('-----------删除数据');
				this.data.bootstrapData.splice(i,1);
				this.trigger(this.data);
			}
		}
	},
	// 删除一个组件
	onDelCommpont:function(cid){
		for(let i = 0; i < this.data.bootstrapData.length; i++){

			for(let c = 0; c < this.data.bootstrapData[i].columns.length; c++){
				for(let f = 0; f < this.data.bootstrapData[i].columns[c].fields.length; f++){
					if(this.data.bootstrapData[i].columns[c].fields[f].cid === cid){
						this.data.bootstrapData[i].columns[c].fields.splice(f,1);
						this.trigger(this.data);
					}
				}
			}
			
			// if(isfind){
			// 	break;
			// }
		}
	},
	// 根据 布局 组件来创建 列组件（临时创建的，不存数据库中的，辅助布局组件）的属性
	createColumns:function(row){
		let colsstr = '12';
		let rowprops = {};
		for(let p = 0; p < row.properties.length; p++){
			if(row.properties[p].codestr === 'cols'){
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
	setViewByCid:function(cid, view){
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
	},
	saveJson:function(){
		//alert(this.data.bootstrapData);
		//let datajson = this.data.bootstrapData; stringify
		
		let datastr = JSON.stringify(this.data.bootstrapData);
		$.ajax({
			url:zyuc_config.savejsonurl,
			method:'POST',
			data:{savejson:datastr}
		}).done(function(result){
			alert('提交到后台');
		}).fail(function(){
			alert('后台保存失败');
		})
	}
});

export default AppStore;
