import React, { Component, PropTypes } from 'react'

class BackgroundImages extends Component
{
	constructor(props)
	{
		super(props);

		this.state =
		{
			bgId: Math.floor(Math.random() * (50 - 1)) + 1
		};
	}

	render()
	{
		setTimeout(this._fadeOut.bind(this), 8000);

		var imageSrc = "https://www.castdashboard.com/images/backgrounds/background" + this.state.bgId + ".jpg";
		var imageSrcNext = "https://www.castdashboard.com/images/backgrounds/background" + (this.state.bgId + 1) + ".jpg";
        
		return (
			<div id="backgroundImagesContainer">
				<div id="currentBackground" className="backgroundImage">
					<img src={imageSrc} />
				</div>
				<div id="nextBackground" className="backgroundImage" style={{display: display.hidden}}>
					<img src={imageSrcNext} />
				</div>
			</div>
		);
	}

	_fadeOut()
	{
		var bgId = this.state.bgId;
		var currentBgId = (bgId >= 50) ? 1 : bgId + 1;
        
		$("#currentBackground").fadeOut(() =>
		{
			//this.setState({ bgId: currentBgId });

			$("#nextBackground").fadeIn();
		});
	}
}

export default BackgroundImages;