'use strict';
import FormbuilderStore from '../stores/FormbuilderStore';
import FBConst from '../stores/FBConst';
import React from 'react/addons';
import EditView from './EditView';
/**
	一列布局组件
*/
let Row2View = React.createClass({
	render:function(){
		let inputClassName = 'rf-size-' + this.props[FBConst.mappings.SIZE];
		
		return (    <table width="99%" border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <th>列1</th>
            <th>列2</th>
            <th>列3</th>
            <th>列4</th>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>);
	}
});

FormbuilderStore.registerField('b_list', {
	View: Row2View,
	Edit: EditView
});
