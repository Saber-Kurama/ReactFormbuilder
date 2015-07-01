'use strict';
import React from 'react';
import FBApp from './components/FBApp';
import './stores/FormbuilderStore';
import './fields';
var injectTapEventPlugin = require("react-tap-event-plugin");
import '../less/index.less';
injectTapEventPlugin();
React.render(
	<FBApp />,
	document.getElementById('app')
);

