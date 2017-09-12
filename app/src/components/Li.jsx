var React = require('react');
var Input = require('./Input');

module.exports = React.createClass({
	render: function() {
		if (this.props.data != undefined){
			var li = this.props.data.map(function(anObjectMapped, index) {
    			return(
    				<li key={index}>
    					<Input index={index} name={anObjectMapped.name} />
    				</li>
    				); 
			}.bind(this));
			return(
				<div>
					<ul id="list">
						{li}
					</ul>
				</div>
				);
		} else {
			return (
				<div>
					<ul id="list">
		    			<li>
						</li>
					</ul>
				</div>
				);
		}
	} 
});