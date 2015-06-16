import React from 'react';
import classNames from 'classnames'
/**
 参照 page 妹纸 制作 布局
*/
let GridInner = React.createClass({

	render: function() {
		let classes = classNames(this.props.className,'col-xs-12','col-sm-4');
		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}

});

export default  GridInner;
