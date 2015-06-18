'use strict';
import React from 'react';
import LeftView from './LeftView';
import RightView from './RightView';

let BuilderView = React.createClass({
	render : function(){
		return (
			<div>
				<LeftView />
				<RightView />
				<div className='fb-clear'></div>
			</div>
		);
	}
});
export default BuilderView;
