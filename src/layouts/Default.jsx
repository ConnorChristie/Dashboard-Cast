import React, { Component } from 'react'
import ReactDom from 'react-dom'

import BackgroundImages from '../components/BackgroundImages'
import SplashScreen from '../components/SplashScreen'

class DefaultLayout extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div id="global">
				<BackgroundImages />
			</div>
		);
	}
}

export default DefaultLayout;