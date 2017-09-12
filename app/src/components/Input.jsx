var React = require('react');

module.exports = React.createClass({
	render: function() {
		//console.log(this.props.name);
		return (
			<div>
				<input type="radio" name="radioData" id={this.props.index} value={this.props.name} /><p>{this.props.name}</p>
			</div>
		);
	} 
});