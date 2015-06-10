'use strict';
import React from 'react';
import ViewFieldView from './ViewFieldView';
import Dustbin from './Dustbin';

let RightView = React.createClass({
	render : function(){
		console.log(this.props);
		let viewFieldViews = [];
		this.props.bootstrapData.map(function(data){
			viewFieldViews.push(<ViewFieldView {...data}/>);
		});
		return (
			<div className='fb-right'>
				<div className='fb-no-response-fields'>No response fields</div>
				<div className='fb-response-fields'>
					{viewFieldViews}
					<Dustbin />
				</div>
			</div>

		);
	}
});
export default RightView;
