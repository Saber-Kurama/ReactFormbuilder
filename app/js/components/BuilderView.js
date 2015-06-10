'use strict';
import React from 'react';
import LeftView from './LeftView';
import RightView from './RightView';
import AppStore from '../stores/AppStore';

let BuilderView = React.createClass({
	getInitialState: function() {
		AppStore.getBootstrapData();
		console.log(AppStore.getBootstrapData());
		return AppStore.getBootstrapData();
	},
	render : function(){
		let { inputFields } = this.props;
		//let inputFields = {};
		return (
			<div>
				<LeftView inputFields = {inputFields} />
				<RightView {...this.state}/>
				<div className='fb-clear'></div>
			</div>
		);
	}
});
export default BuilderView;
