import React, {PropTypes} from 'react';
import FormbuilderStore from '../stores/FormbuilderStore';
import mui, {TextField} from 'material-ui';

let EditView = React.createClass({
	propTypes:{
		properties:PropTypes.object,
		changeProperties:PropTypes.func
	},
	//mixins:[React.addons.LinkedStateMixin],
	// getInitialState: function() {
	// 	return {
	// 		qsid:null
	// 	};
	// },
	componentDidMount: function() {
		// let stateobj = {};
		// for(let i = 0; i < this.props.properties.length; i++){
		// 	stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
		// }
	},
	properties:{},
	qsid:null,
	render:function(){
		// 编辑视图的 form表单
		let inputs = [];
		let labeltext = '';
		// 循环 属性
		for(let i = 0; i < this.props.properties.length; i++){
			// 赋值 转换成 属性 属性值 的对象
			this.properties[this.props.properties[i].codestr] = this.props.properties[i].value;
			// 判断是不是 有新的 labetext （数据按照labetext 排序）
			if(labeltext !== this.props.properties[i].labletext){
				labeltext = this.props.properties[i].labletext;
				inputs.push(
					<div className='fb-edit-section-header'>{labeltext}</div>
				);
			}
			// 定义 input 元素
			let elementstr = '';
			//判断属性的影响范围
			if(this.props.properties[i].scope === 1){
				// 判断 是不是  查询
				if(this.props.properties[i].codestr === 'query' ){
					let options = [];
					options.push(<option >请选择</option>);
					for(let q = 0; q < FormbuilderStore.qs.length; q++){
						options.push(<option value={FormbuilderStore.qs[q].id}>{FormbuilderStore.qs[q].name}</option>);
					}
					// 这里面有个bug  。。初始化的时候，如果先渲染依赖它的值表单的话就问题，因为初始值为null
					if(this.props.properties[i].value){
						this.qsid = this.props.properties[i].value;
						// 在渲染的过程中 是不能 进行 更新状态的 一开始的时候 就应该知道 选择的数据源是什么
						// let va = this.props.properties[i].value;
						// this.setState({
						// 	qsid: va
						// });
					}
					if(options.length < 1){
						
					}
					elementstr = (
						<div>
							<label>{this.props.properties[i].name}</label>
							<select key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties}>
								{options}
							</select>
						</div>
					);
				}else{
					let options = [], columns;
					options.push(<option >请选择</option>);
					if(this.qsid){
						for(let q = 0; q < FormbuilderStore.qs.length; q++){
							if(this.qsid === FormbuilderStore.qs[q].id){
								columns = FormbuilderStore.qs[q].columns;
								break;
							}
						}
					}
					if(columns){
						columns.map((column) => {
							options.push(<option value={column.id}>{column.logfiled}</option>);
						});
					}					
					if(options.length < 1){
						
					}
					elementstr = (
						<div>
							<label>{this.props.properties[i].name}</label>
							<select key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties}>
								{options}
							</select>
						</div>
					);
				}
			}else{
				// elementstr = (
				// 	<div>
						
				// 		<label>{this.props.properties[i].name}</label>
				// 		<input key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties} />
				// 		TextField
				// 	</div>
				// );
				elementstr = (
					<div>
						<TextField key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} 
						defaultValue={this.props.properties[i].value} onChange={this.changeProperties} floatingLabelText={this.props.properties[i].name} 
						style={{width:'100%'}} />
					</div>
				);
			}
			inputs.push(elementstr);
		}
		return (
			<div style={{padding:10}}>
				<h4>编辑视图</h4>
				{inputs}
			</div>
		);
	},
	changeProperties:function(event){
		console.log('更改属性');
		console.log(event);
		Object.keys(this.refs).forEach((ref, i) => {
			console.log(this.refs[ref]);
			let value = this.refs[ref].getValue();
			console.log(value);
			this.properties[ref] = value;

		}.bind(this));

		this.props.changeProperties(this.properties);
	},
	getInputValue:function(ref){
		if(this.refs[ref] && this.refs[ref].getDOMNode){
			let input = this.refs[ref].getDOMNode();
			if(input.type === 'checkbox'){
				return input.checked;
			}
			return input.value;
		}
	},
	saber:function(){
	}

});

export default EditView;
