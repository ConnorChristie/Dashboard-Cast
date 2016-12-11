import React, { Component } from 'react';

class Widget extends Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<div className="card visible">
				<div className="content">
					<h1 className="time primaryTitle">11:10</h1>
					<h4 className="date secondaryTitle">December 10, 2016</h4>
				</div>
			</div>
		);
	}

	componentDidMount()
	{
		$(".content").show().css("opacity", 1);
	}
}

export default Widget;
