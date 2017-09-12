var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<p>{this.props.name}</p>
				<input type="radio" name="radioData" id={this.props.index} value={this.props.name} />
			</div>
		);
	} 
});