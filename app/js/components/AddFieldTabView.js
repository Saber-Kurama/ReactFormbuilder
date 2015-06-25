'use strict';
import React, { PropTypes }from 'react';
import DragBtn from './DragBtn';
import DragLayoutBtn from './DragLayoutBtn';

let AddFieldTabView = React.createClass({
	propTypes:{
		inputFields:PropTypes.array.isRequired
	},
	createBtn:function(item){
		switch(item.type){
			case 'row':
				return <DragLayoutBtn name={item.name} code={item.code} type={item.type}/>;
			default :
			return <DragBtn name={item.name} code={item.code} type={item.type}/>;
		}

	},
	// 创建 每组 分类
	createSection:function(item){
		let btns = [];
		if(item.viewitems && item.viewitems.length > 0){
			item.viewitems.map(view => {
				if(view.showhide > 0){
					btns.push(this.createBtn(view));
				}
			});
		}
		return (
			<div className='section'>
				{btns}
			</div>
		);
	},
	render : function(){
		let sections = [];
		// 暂时没有考虑前端排序
		this.props.inputFields.map(item => {
			//if(item.showhide > 0){
				sections.push(this.createSection(item));
			//}
		});
		// for (let keyvalue in this.props.inputFields){
		// 	sections.push(
		// 		<DragBtn name={keyvalue} />
		// 	);
		// }
		// let layoutButtons = [];
		// this.props.layoutFields.map(layout=>{
		// 	layoutButtons.push(
		// 		<DragLayoutBtn {...layout}/>
		// 	);
		// });
		return (
			<div className='fb-add-field-types'>
				{sections}
			</div>
		);
	}
});
export default AddFieldTabView;
