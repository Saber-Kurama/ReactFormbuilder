'use strict';
import React from 'react';
import EditBaseHeader from './EditBaseHeader';
import EditCommon from './EditCommon';

let EditBase = React.createClass({
	render : function(){
		return (
			<div>
				这是EditBase
				<EditBaseHeader />
				<EditCommon />
			</div>
		);
	}
});
export default EditBase;
