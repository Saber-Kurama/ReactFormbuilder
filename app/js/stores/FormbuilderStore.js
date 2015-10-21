'use strict';
import Reflux from 'reflux';
import React from 'react';
//import compontlist from './views';
import AppActions from '../actions/AppActions';
import _ from 'lodash';
import EditView from '../fields/EditView';

let FormbuilderStore = Reflux.createStore({
	fields:{},
	compontlist:[],
	qs:[],
	init:function(){
		this.listenTo(AppActions.getComponts, 'onGetComponts');
	},
	onGetComponts:function(){
		//return compontlist;
		// 暂时 写代码到这
		this.qs = zyuc_qs;
		this.config = zyuc_config;
		this.compontlist = zyuc_compontlist;
		this.createComponts(this.compontlist);
		this.trigger(zyuc_compontlist);//
	},
	// 注册 组件 主要是注册组件的 view 和 editview
	registerField:function(name, opts){
		//opts.field_type = name;
		this.fields[name] = opts;
	},
	// 由于 没有  type 这个值 不靠谱 暂时 去掉 type 的判断
	findCompontByTypeCode:function(type, code){
		let common = null;
		for(let i = 0; i < this.compontlist.length; i++){
			let isfind = false;
			//if(compontlist[i].type === type){
				for(let j = 0; j < this.compontlist[i].viewitems.length; j++){
					if(code === this.compontlist[i].viewitems[j].code){
						common = this.compontlist[i].viewitems[j];
						break;
					}
				}
			//}
			if(isfind){ break; }
		}

		//return Object.assign({}, common);
		return _.cloneDeep(common);
	},
	createComponts:function(compontlist){
		for(let i = 0; i < compontlist.length; i++){
			if(compontlist[i].code === "row"){
				continue;
			}
			for(let j = 0; j < compontlist[i].viewitems.length; j++){
				let Row2View = React.createClass({
					render:function(){
						return (
							<div dangerouslySetInnerHTML={{__html:compontlist[i].viewitems[j].htmltemplate}} >
							</div>);
					}
				});
				FormbuilderStore.registerField(compontlist[i].viewitems[j].code, {
					View: Row2View,
					Edit: EditView
				});
			}
		}
	}
});
export default FormbuilderStore;
