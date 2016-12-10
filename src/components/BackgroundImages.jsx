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
		this._getNextImage();

		const currentImage = this.state.currentImage;
		const nextImage = this.state.nextImage;

		return (
			<div id="backgroundImagesContainer">
				<div id="currentBackground" className="backgroundImage">
					<img src={currentImage} onLoad={this._handleImageLoad.bind(this)} onError={this._handleImageError.bind(this)} />
					<img src={nextImage} style={{display: 'none'}} />
				</div>
			</div>
		);
	}

	_handleImageLoad()
	{
		$("#currentBackground").fadeIn();

		this._startTimeout();
	}

	_handleImageError()
	{

	}

	_startTimeout()
	{
		setTimeout(this._fadeOut.bind(this), this.props.timeout || 10000);
	}

	_fadeOut()
	{
		$("#currentBackground").fadeOut(() =>
		{
			this._nextImage();
		});
	}

	_nextImage()
	{
		var bgId = this.state.bgId;
		var currentBgId = (bgId >= 50) ? 1 : bgId + 1;
        
		this.setState({ bgId: currentBgId });
	}

	_getNextImage()
	{
		this.state.currentImage = "https://www.castdashboard.com/images/backgrounds/background" + this.state.bgId + ".jpg";
		this.state.nextImage = "https://www.castdashboard.com/images/backgrounds/background" + (this.state.bgId + 1) + ".jpg";
	}
}

export default BackgroundImages;