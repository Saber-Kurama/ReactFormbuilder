'use strict';
import React from 'react';
import FBApp from './components/FBApp';
import './stores/FormbuilderStore';
import './fields';

React.render(
	<FBApp />,
	document.getElementById('app')
);

