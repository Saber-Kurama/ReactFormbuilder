import React, {PropTypes} from 'react';
import classNames from 'classnames';
/**
 参照 page 妹纸 制作 布局
*/
let GridInner = React.createClass({
	propTypes:{
		minHeight:PropTypes.number.isRequired,
		col:PropTypes.number.isRequired
	},
	render: function() {
		let classes = classNames(this.props.className, 'col-xs-12', 'col-sm-' + this.props.col);
		let style = {
			borderWidth:1,
			borderColor:'red',
			borderStyle:'dotted',
			minHeight:this.props.minHeight
		};
		return (
			<div className={classes} style={style}>
				{this.props.children}
			</div>
		);
	}

});

export default GridInner;
