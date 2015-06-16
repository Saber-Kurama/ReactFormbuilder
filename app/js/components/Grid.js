import React from 'react';

let Grid = React.createClass({

	render: function() {
		return (
			<div className="row"> 
				<div className="container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}

});

export default Grid;
