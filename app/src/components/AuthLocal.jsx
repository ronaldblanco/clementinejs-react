var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<img src="/public/img/clementine_150.png" />
				<br />
				<p class="clementine-text">Clementine.js</p>
			
				<button type="submit" class="btn btn-add btn-primary" id ="login">Login User!</button>
				<button type="submit" class="btn btn-add" id ="create">Create User!</button>
				<button type="submit" class="btn btn-del" id ="reset">Reset Pass!</button>
			</div>
		);
	} 
});