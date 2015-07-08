import React, {PropTypes} from 'react/addons';
import FormbuilderStore from '../stores/FormbuilderStore';
import mui, {TextField, SelectField} from 'material-ui';

let EditView = React.createClass({
	propTypes:{
		properties:PropTypes.object,
		changeProperties:PropTypes.func
	},
	mixins:[React.addons.LinkedStateMixin],
	getInitialState: function() {
		let stateobj = {};
		for(let i = 0; i < this.props.properties.length; i++){
			//if(this.props.properties[i].scope === 1){
				// stateobj[this.props.properties[i].codestr] = {
				// 	payload:this.props.properties[i].id,
				// 	text:this.props.properties[i].value
				// }
				stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
				this.properties[this.props.properties[i].codestr] = this.props.properties[i].value;

			//}
		}
		return stateobj;
	},
	componentDidMount: function() {
		// let stateobj = {};
		// for(let i = 0; i < this.props.properties.length; i++){
		// 	stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
		// }
	},
	properties:{},
	qsid:null,
	render:function(){
		console.log('---------------------------');
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
					//options.push(<option >请选择</option>);
					//options.push({payload:null, text:'请选择'});
					for(let q = 0; q < FormbuilderStore.qs.length; q++){
						//options.push(<option value={FormbuilderStore.qs[q].id}>{FormbuilderStore.qs[q].name}</option>);
						options.push({payload:FormbuilderStore.qs[q].id, text:FormbuilderStore.qs[q].name});
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
					// 不能再渲染的时候 初始化 state 数据
					//this.state[this.props.properties[i].codestr] = this.props.properties[i].value;
					let statekey = this.props.properties[i].codestr;
					let selectValueLink = {
						value:this.state[this.props.properties[i].codestr],
						requestChange:function(newvalue){
							let newobj = {};
							newobj[statekey] = newvalue
							this.setState(newobj);
							this.properties[statekey] = newvalue;
							this.props.changeProperties(this.properties);
						}.bind(this)
					}
					elementstr = (
						<div>
							<SelectField 
							ref={this.props.properties[i].codestr}
							valueLink = {selectValueLink}
							//valueLink={this.linkState(this.props.properties[i].codestr).value}
							//onChange={function(e){this.changeSelectProps(e, statekey)}.bind(this) }
							//hintText={this.props.properties[i].name}
							floatingLabelText={this.props.properties[i].name}
							menuItems={options}
							>
								
							</SelectField>
						</div>
					);
					// elementstr = (
					// 	<div>
					// 		<label>{this.props.properties[i].name}</label>
					// 		<select key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties}>
					// 			{options}
					// 		</select>
					// 	</div>
					// );
				}else{
					let options = [], columns;
					//options.push({payload:null, text:'请选择'});
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
							//options.push(<option value={column.id}>{column.logfiled}</option>);
							options.push({payload:column.id, text:column.logfiled});
						});
					}					
					if(options.length < 1){
						
					}
					let statekey = this.props.properties[i].codestr;
					let selectValueLink = {
						value:this.state[this.props.properties[i].codestr],
						requestChange:function(newvalue){
							let newobj = {};
							newobj[statekey] = newvalue
							this.setState(newobj);
							this.properties[statekey] = newvalue;
							this.props.changeProperties(this.properties);
						}.bind(this)
					}
					elementstr = (
						<div>
							<SelectField  
							ref={this.props.properties[i].codestr} 
							valueLink = {selectValueLink}
							//defaultValue={this.props.properties[i].value} 
							//onChange={this.changeProperties}
							floatingLabelText={this.props.properties[i].name}
							menuItems={options}
							>
								
							</SelectField>
						</div>
					);
					
					// elementstr = (
					// 	<div>
					// 		<label>{this.props.properties[i].name}</label>
					// 		<select key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties}>
					// 			{options}
					// 		</select>
					// 	</div>
					// );
				}
			}else{
				// elementstr = (
				// 	<div>
						
				// 		<label>{this.props.properties[i].name}</label>
				// 		<input key={this.props.properties[i].codestr} ref={this.props.properties[i].codestr} defaultValue={this.props.properties[i].value} onChange={this.changeProperties} />
				// 		TextField
				// 	</div>
				// );
				this.properties[this.props.properties[i].codestr] = this.props.properties[i].value;
				let statekey = this.props.properties[i].codestr;
				let textValueLink = {
						value:this.state[this.props.properties[i].codestr],
						requestChange:function(newvalue){
							let newobj = {};
							newobj[statekey] = newvalue
							this.setState(newobj);
							this.properties[statekey] = newvalue;
							this.props.changeProperties(this.properties);
						}.bind(this)
					}
				elementstr = (
					<div>
						<TextField  ref={this.props.properties[i].codestr} 
						valueLink = {textValueLink}
						//defaultValue={this.props.properties[i].value} onChange={this.changeProperties} floatingLabelText={this.props.properties[i].name} 
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
	changeSelectProps:function(e, statekey){
		//this.state[statekey] = e.target.value;
		this.linkState(statekey).requestChange(e.target.value.text);
		this.properties[statekey] = e.target.value.text;
		// this.setState(this.state);
		this.props.changeProperties(this.properties);
	},
	changeProperties:function(event){
		// Object.keys(this.refs).forEach((ref, i) => {
		// 	let value = '';
		// 	if(this.refs[ref].getValue){
		// 		value = this.refs[ref].getValue();
		// 		this.properties[ref] = value;
		// 	}else{
				
		// 	}			
		// }.bind(this));

		this.props.changeProperties(this.properties);
	},
	getInputValue:function(ref){
		if(this.refs[ref] && this.refs[ref].getDOMNode){
			let input = this.refs[ref].getDOMNode();
			// if(input.type === 'checkbox'){
			// 	return input.checked;
			// }
			// return input.value;
		}
	},
	saber:function(){
	}

});

export default EditView;
