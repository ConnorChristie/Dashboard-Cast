import React, { Component, PropTypes } from 'react'

class SplashScreen extends Component
{
	render()
	{
		return (
			<div id="splashScreen">
				<div className="mainContent">
					<img src="images/icon.png" alt="Dashboard Cast icon" />
					<div className="splashText">
						<h1>Welcome to Dashboard Cast</h1>
						<p id="noDeviceFound">No device found.  </p>
						<p id="noWidgetsPresent">Connected to device. No widgets found, add a widget from your device to start viewing content. </p>
					</div>
					<div className="clear"></div>
				</div>
				<div className="castBadge">
					<img src="images/cast_ready_badge.png" alt="" />
				</div>
			</div>
		);
	}
}

export default SplashScreen;
