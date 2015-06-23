import React from 'react/addons';

let EditView = React.createClass({

	mixins:[React.addons.LinkedStateMixin],
	getInitialState: function() {
		let stateobj = {};
		for(let i = 0; i < this.props.properties.length; i++){
			stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
		}		
		return stateobj;
	},

	render:function(){
		let inputs = [];
		let labeltext = '';
		let self = this;
		console.log(this.linkState('saber'));
		for(let i = 0; i < this.props.properties.length; i++){
			if(labeltext !== this.props.properties[i].labletext){
				labeltext = this.props.properties[i].labletext;
				inputs.push(
					<div className='fb-edit-section-header'>{labeltext}</div>
				);
			}
			inputs.push(
				<div>
					<label>{this.props.properties[i].name}</label>
					<input valueLink={this.linkState(this.props.properties[i].codestr)} onBlur={this.changeProperties} />
				</div>
			)
		}
		console.log(inputs);
		return (
			<div >布局1编辑视图
				{inputs}
			</div>
		);
	},
	changeProperties:function(){

		console.log('属性修改');
		let properties = {};
		for(let i = 0; i < this.props.properties.length; i++){
			properties[this.props.properties[i].codestr]  = this.linkState(this.props.properties[i].codestr).value;
		}
		console.log(properties);
		this.props.changeProperties(properties);
		this.saber();
	},
	saber:function(){
		console.log('saber');
	}

});

export default  EditView;
