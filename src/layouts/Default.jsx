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
				<BackgroundImages timeout={15000} />
			</div>
		);
	}
}

export default DefaultLayout;