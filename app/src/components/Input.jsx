var React = require('react');

module.exports = React.createClass({
	render: function() {
		//console.log(this.props.name);
		return (
			<input type="radio" name="radioData" id={this.props.index} value={this.props.name}>{this.props.name}</input>
		);
	} 
});