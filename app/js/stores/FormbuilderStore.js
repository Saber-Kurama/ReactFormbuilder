'use strict';
import Reflux from 'reflux';
import commonlist from './commonlist';
import AppActions from '../actions/AppActions';
let FormbuilderStore = Reflux.createStore({
	fields:{},
	commonlist:[],
	init:function(){
		this.listenTo(AppActions.getCommons, 'onGetCommons');
	},
	onGetCommons:function(){
		console.log('获取组件数据');
		console.log(commonlist);
		//return commonlist;
		this.commonlist = commonlist;
		this.trigger(commonlist);//
	},
	// 注册 组件 主要是注册组件的 view 和 editview
	registerField:function(name, opts){
		opts.field_type = name;
		this.fields[name] = opts;
	},
	findCommonByTypeCode:function(type, code){
		let common = null;
		for(let i = 0; i < this.commonlist.length; i++){
			let isfind = false;
			if(commonlist[i].type === type){
				for(let j = 0; j < this.commonlist[i].viewitems.length; j++){
					if(code === this.commonlist[i].viewitems[j].code){
						common = this.commonlist[i].viewitems[j];
						break;
					}
				}
			}
			if(isfind){ break; }
		}
		return Object.assign({}, common);
	}
});
export default FormbuilderStore;
