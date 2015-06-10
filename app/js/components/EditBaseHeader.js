'use strict';
import React from 'react';

let EditBaseHeader = React.createClass({
	render : function(){
		return (
			<div className='fb-field-label'>
				<span data-rv-text="label">label</span>
				<code className='field-type' data-rv-text='code'>code</code>
				<span className='fa fa-arrow-right pull-right'></span>
			</div>
		);
	}
});
export default EditBaseHeader;
