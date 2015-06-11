'use strict';
import React from 'react';
import LeftView from './LeftView';
import RightView from './RightView';

let BuilderView = React.createClass({
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
