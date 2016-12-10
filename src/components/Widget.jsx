import React from 'react';

var Widget = React.createClass({
	render() {
		return (
			<div className="card visible">
				<div className="content">
					Hello world
				</div>
			</div>
		);
	}
});

module.exports = Widget;
