import React, { Component, PropTypes } from 'react'

const NUMBER_OF_DEFAULT_IMAGES = 782;

class BackgroundImages extends Component
{
	constructor(props)
	{
		super(props);

		let initialImageIndex = this._getInitialImage();

		this.state =
		{
			currentImageIndex: initialImageIndex,
			nextImageIndex: initialImageIndex + 1
		};
	}

	render()
	{
		this._getNextImage();

		return (
			<div id="backgroundImagesContainer">
				<div id="currentBackground" className="backgroundImage" style={{ display: 'none' }}>
					<img src={this.state.currentImage} />
				</div>
				<div id="nextBackground" className="backgroundImage" style={{ display: 'none' }}>
					<img src={this.state.nextImage} onLoad={this._handleImageLoad.bind(this)} onError={this._handleImageError.bind(this)} />
				</div>
			</div>
		);
	}

	componentDidMount()
	{
		$("#currentBackground").fadeIn();
	}

    /**
     * The current background will already have the current image loaded because it was loaded in the next image
     * This hides the next background and shows the current background, this is a flawless transition
     */
	_handleImageLoad()
	{
		$("#currentBackground").show();
		$("#nextBackground").hide();

		this._startTimeout();
	}

    /**
     * If the next image is unable to load, try to get a new image
     * This is going to be a little jumpy because the previous image is going to change based on the next image it can get
     */
	_handleImageError()
	{
		this._nextImage();
	}

    /**
     * Starts the timeout until the next image transition
     */
	_startTimeout()
	{
		setTimeout(this._fadeImages.bind(this), this.props.timeout || 10000);
	}

    /**
     * Fades out the current image and fades in the next image
     * When both promises are done, fetch the next image
     */
	_fadeImages()
	{
		let fadeOutPromise = $("#currentBackground").fadeOut().promise();
		let fadeInPromise = $("#nextBackground").fadeIn().promise();

		$.when(fadeOutPromise, fadeInPromise).then(this._nextImage.bind(this));
	}

    /**
     * Gets the next available image indicies
     */
	_nextImage()
	{
		let currentImageIndex = this.state.nextImageIndex;
		let nextImageIndex = this._getNextImageIndex(currentImageIndex);

		this.setState({ currentImageIndex: currentImageIndex, nextImageIndex: nextImageIndex });
	}

    /**
     * Gets the next available image index
     *
     * @param currentImageIndex The current image index
     */
	_getNextImageIndex(currentImageIndex)
	{
		let nextImageIndex = currentImageIndex + 1;

		if (nextImageIndex > this._getNumberOfImages())
		{
			return 1;
		}

		return nextImageIndex;
	}

    /**
     * Gets the next image url's
     */
	_getNextImage()
	{
		this.state.currentImage = "https://www.castdashboard.com/images/backgrounds/background" + this.state.currentImageIndex + ".jpg";
		this.state.nextImage = "https://www.castdashboard.com/images/backgrounds/background" + this.state.nextImageIndex + ".jpg";
	}

    /**
     * Gets the number of image indicies
     */
	_getNumberOfImages()
	{
		return NUMBER_OF_DEFAULT_IMAGES;
	}

    /**
     * Gets the initial image index
     */
	_getInitialImage()
	{
		return Math.floor(Math.random() * (this._getNumberOfImages() - 2)) + 2;
	}
}

export default BackgroundImages;