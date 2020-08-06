import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../app/assets/css/common.less';
import Index from './Main';

export default class App extends Component {
	render() {
		return (
			<Index/>
		);
	}
}
