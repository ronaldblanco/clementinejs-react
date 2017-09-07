var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
		    <li>
				<input type="radio" name="radioData" id="radioData" value={this.props.data} /><p>{this.props.data}</p>
			</li>
		);
	} 
});