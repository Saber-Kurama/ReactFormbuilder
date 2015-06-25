'use strict';
import Reflux from 'reflux';
import compontlist from './views';
import AppActions from '../actions/AppActions';
import _ from 'lodash';
let FormbuilderStore = Reflux.createStore({
	fields:{},
	compontlist:[],
	init:function(){
		this.listenTo(AppActions.getComponts, 'onGetComponts');
	},
	onGetComponts:function(){
		console.log('获取组件数据');
		console.log(compontlist);
		//return compontlist;
		this.compontlist = compontlist;
		this.trigger(compontlist);//
	},
	// 注册 组件 主要是注册组件的 view 和 editview
	registerField:function(name, opts){
		opts.field_type = name;
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
