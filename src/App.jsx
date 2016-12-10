import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import DefaultLayout from './layouts/Default'
import HomePage from './pages/Home'
import PrivacyPage from './pages/Privacy'

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

ReactDom.render(
	<Router history={browserHistory}>
		<Route path="/" component={DefaultLayout}>
			<Route path="/" component={HomePage} />
			<Route path="privacy" component={PrivacyPage} />
		</Route>
	</Router>,
	document.getElementById('app')
);
