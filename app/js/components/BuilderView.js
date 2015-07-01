'use strict';
import React from 'react';
import LeftView from './LeftView';
import RightView from './RightView';
import mui, {Paper} from 'material-ui';

let BuilderView = React.createClass({
	render : function(){
		return (
			<div>
				<Paper  style={{paddingTop:'64px',position:'fixed',height:'100%',width:'300px'}}>
					<LeftView />
				</Paper>
				<Paper style={{paddingTop:'74px',paddingLeft:'315px',height:'100%',paddingRight:'15px',paddingBottom:'15px'}}>
					<RightView />
				</Paper>
			</div>
		);
	}
});
export default BuilderView;
