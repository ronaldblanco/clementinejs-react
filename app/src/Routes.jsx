var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;

var Login = require('./components/Login');
var ClicksContainer = require('./components/ClicksContainer');
var DatasContainer = require('./components/DatasContainer');
var Main = require('./components/Main');
var Profile = require('./components/Profile');
var AuthLocal = require('./components/AuthLocal');
var CreateLocal = require('./components/CreateLocal');
var ResetLocal = require('./components/ResetLocal');

module.exports = React.createClass({
	requireLogin: function (nextState, replaceState) {
		if (!this.props.user) {
			replaceState({ nextPathname: nextState.location.pathname }, '/Login')
		}
	}, 
	render: function() {
		return (
			<Router>
				<Route path="/" component={Main} onEnter={this.requireLogin} user={this.props.user}>
					<IndexRoute component={DatasContainer}/>
					<Route path="/Profile" component={Profile} user={this.props.user}/>
				</Route>
				<Route path="/Login" component={Login}/>
				<Route path="/LocalLogin" component={AuthLocal}/>
				<Route path="/LocalCreate" component={CreateLocal}/>
				<Route path="/LocalReset" component={ResetLocal}/>
			</Router>
		)			
	}
})