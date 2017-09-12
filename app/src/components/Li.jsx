var React = require('react');
var Input = require('./Input');

module.exports = React.createClass({
	render: function() {
		if (this.props.data != undefined){
			//console.log(this.props.data);
			//console.log(this.props.data.length);
			var li = this.props.data.map(function(anObjectMapped, index) {
				//console.log(anObjectMapped.name);
    			return(
    				<li key={index}>
    					<Input index={index} name={anObjectMapped.name} />
    				</li>
    				); 
			}.bind(this));
			//console.log(li);
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