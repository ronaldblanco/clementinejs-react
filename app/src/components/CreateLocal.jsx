var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<img src="/public/img/clementine_150.png" />
					<br />
					<p class="clementine-text">Clementine.js</p>
					<Link className="menu" to={"/LocalLogin"}>Login Local User</Link>
					<Link className="menu" to={"/LocalReset"}>Reset Local Password</Link>
					<Link className="menu" to={"/login"}>Return to Login Page</Link>
				</div>
				<div>
					<form action="/auth/localnew" method="post">	
					<h3>CREATE LOCAL USER</h3>	
					<div class="form-group">	
						<div>	
						<label>Username:</label>	
						<input type="text" name="username"className="form-control" placeholder="Username or Email"/>
						<br/>	</div>	<div>	<label>Display Name:</label>	
						<input type="text" name="display"className="form-control" placeholder="Display Name"/>
						<br/>	</div>	<div>	<label>Password:</label>	
						<input type="password" name="password" className="form-control" placeholder="Password"/>	
						</div>	
					</div>	<br/>	
					<div class="form-group">	
						<div>	
						<input type="submit" className="btn btn-primary" value="Submit"/>	
						</div>	
					</div>
					</form>
				</div>
			</div>
		);
	} 
});