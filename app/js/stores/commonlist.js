'use strict';
const commonlist = [{
	id:'001',
	code:null,
	htmltemplate:'',
	icon:'',
	ilevel:'',
	name:'布局',
	ordernum:0,
	parentelemen:'root',
	properties:{},
	showhide:1,
	type:'row',
	viewitems:[{
		id:'001-1',
		code:'row1',
		htmltemplate:'',
		icon:'',
		ilevel:'',
		name:'一列布局',
		ordernum:0,
		parentelemen:'root',
		showhide:1,
		type:'row',
		properties:{
			minheight:80,
			cols:'12'
		}
	}, {
		id:'001-2',
		code:'row2',
		htmltemplate:'',
		icon:'',
		ilevel:'',
		name:'两列布局',
		ordernum:0,
		parentelemen:'root',
		showhide:1,
		type:'row',
		properties:{
			minheight:80,
			cols:'6,6'
		}
	}]

}, {
	id:'002',
	code:null,
	htmltemplate:'',
	icon:'',
	ilevel:'',
	name:'组件',
	ordernum:0,
	parentelemen:'root',
	properties:{},
	showhide:1,
	type:'row',
	viewitems:[{
		id:'002-1',
		code:'text',
		htmltemplate:'',
		icon:'',
		ilevel:'',
		name:'文本框',
		ordernum:0,
		parentelemen:'',
		showhide:1,
		type:'row',
		properties:{
			minheight:80,
			cols:'12'
		}
	}]

}];

export default commonlist;


