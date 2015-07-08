'use strict';
import Reflux from 'reflux';
//import compontlist from './views';
import AppActions from '../actions/AppActions';
import _ from 'lodash';
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
	}
});
export default FormbuilderStore;
