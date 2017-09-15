var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container"> 
				<div className="login">
					<img src="public/img/clementine_150.png" />
					<br />
					<p className="clementine-text">Clementine.js</p>
					<a href="/auth/github/callback">
						<div className="btn" id="login-btn">
							<img src="public/img/github_32px.png" alt="github logo" />
							<p>LOGIN WITH GITHUB</p>
						</div>
					</a>
					<a href="/auth/twitter">
					<div className="btn" id="login-btn">
						<img src="/public/img/twitter_32new.png" alt="twitter logo" />
						<p>LOGIN WITH TWITTER</p>
					</div>
				</a>
				<Link className="btn" to={"/LocalLogin"}>Local Login</Link>
				</div>
			</div>
		);
	}
});

