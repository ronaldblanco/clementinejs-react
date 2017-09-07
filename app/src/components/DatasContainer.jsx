var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');

var ajaxRequest = require('../ajax-functions');

var apiUrl = window.location.origin + '/api/:id/clicks';
var apiUrldata = window.location.origin + '/api/:id/info';

module.exports = React.createClass({
	getInitialState: function(){
		return {
			data: undefined,
			clicks: undefined
		}; 
	},
	componentWillMount: function () {
		ajaxRequest ('GET', apiUrldata, function(data){
			var len = JSON.parse(data).data.length - 1;
			this.setState({
				data: JSON.parse(data).data[len].name
			}); 
		}.bind(this)),
		ajaxRequest ('GET', apiUrl, function(data){
			this.setState({
				clicks: JSON.parse(data).clicks
			}); 
		}.bind(this));
	},
	render: function() {
		return (
			<div className="container">
				<Header />
				<p>You have clicked the button {this.state.clicks} times.</p>   
				<br />
				<div className="btn-container">
					<Btn className="btn-add" onClick={this.handleAddClick} text="CLICK ME!" />
					<Btn className="btn-delete" onClick={this.handleDeleteClick} text="RESET" />
				</div>
				<br/>
				<br/>
				<div className="btn-container">
					New Data Name:<input type="text" name="name" id="name" class="form-control" placeholder="Name"/><br/>
            		<Btn className="btn-add" onClick={this.handleAddData} text="New Data!" />
					<Btn className="btn-delete" onClick={this.handleDeleteData} text="Del Data!" />
	       		</div>
	       		<br/>
				<div className="btn-container">
					<p>Here are your Data Names:</p>
					<ul id="list">
						<li>
							<input type="radio" name="radioData" id="radioData" /><p>{this.state.data}</p>
						</li>
					</ul>
				</div>
			</div>			
		);
	},
	handleAddData: function() {
		var name = document.querySelector('#name');
		var query = "?name=" + name.value;
		ajaxRequest ('POST', apiUrldata + 'add' + query, function(data){
			console.log(data);
			this.setState({data: JSON.parse(data).data});
		}.bind(this));		
	},
	handleDeleteData: function () {
		var query = document.querySelector('input[name = "radioData"]:checked').value;
		ajaxRequest ('DELETE', apiUrldata + 'del' + query, function(data){
			console.log(data);
			this.setState({data: JSON.parse(data).data});
		}.bind(this));			
	},
	handleAddClick: function() {
		ajaxRequest ('POST', apiUrl, function(data){
			console.log(data);
			this.setState({clicks: JSON.parse(data).clicks});
		}.bind(this));		
	},
	handleDeleteClick: function () {
		ajaxRequest ('DELETE', apiUrl, function(data){
			console.log('delete');
			this.setState({clicks: JSON.parse(data).clicks});
		}.bind(this));			
	}
}); 