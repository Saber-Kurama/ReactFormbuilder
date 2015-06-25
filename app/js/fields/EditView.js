import React, {PropTypes} from 'react/addons';

let EditView = React.createClass({
	propTypes:{
		properties:PropTypes.object,
		changeProperties:PropTypes.func
	},
	mixins:[React.addons.LinkedStateMixin],
	getInitialState: function() {
		let stateobj = {};
		for(let i = 0; i < this.props.properties.length; i++){
			stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
		}
		//console.log(stateobj);
		return stateobj;
	},
	componentDidMount: function() {
		let stateobj = {};
		for(let i = 0; i < this.props.properties.length; i++){
			stateobj[this.props.properties[i].codestr] = this.props.properties[i].value;
		}
		console.log(stateobj);
	},
	render:function(){
		let inputs = [];
		let labeltext = '';
		console.log(this.props.properties);

		for(let i = 0; i < this.props.properties.length; i++){
			if(labeltext !== this.props.properties[i].labletext){
				labeltext = this.props.properties[i].labletext;
				inputs.push(
					<div className='fb-edit-section-header'>{labeltext}</div>
				);
			}
			console.log(this.linkState(this.props.properties[i].codestr));
			inputs.push(
				<div>
					<label>{this.props.properties[i].name}</label>
					<input valueLink={this.linkState(this.props.properties[i].codestr)} onBlur={this.changeProperties} />
				</div>
			);
		}
		return (
			<div >
				<h3>编辑视图</h3>
				{inputs}
			</div>
		);
	},
	changeProperties:function(){
		let properties = {};
		for(let i = 0; i < this.props.properties.length; i++){
			properties[this.props.properties[i].codestr] = this.linkState(this.props.properties[i].codestr).value;
		}
		this.props.changeProperties(properties);
	},
	saber:function(){
		console.log('saber');
	}

});

export default EditView;
