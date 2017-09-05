var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');

var ajaxRequest = require('../ajax-functions');

var apiUrl = window.location.origin + '/api/:id/info';

module.exports = React.createClass({
	getInitialState: function(){
		return {
			info: undefined
		} 
	},
	componentWillMount: function () {
		ajaxRequest ('GET', apiUrl, function(data){
			this.setState({
				info: JSON.parse(data).info
			}) 
		}.bind(this)) 
	},
	render: function() {
		return ( 
			<div className="container">
				<div className="container">
					New Data Name:<input type="text" name="name" id="name" class="form-control" placeholder="Name"/><br/>
            		<Btn className="btn-add" onClick={this.handleAddData} text="New Data!" />
					<Btn className="btn-delete" onClick={this.handleDeleteData} text="Del Data!" />
	       		</div>
				<div className="container">
					<p>Here are your Data Names:</p>
					<ul class="list-group" id="list">
						{this.state.info}
					</ul>
				</div>
			</div>			
		)
	},
	handleAddClick: function() {
		ajaxRequest ('POST', apiUrl + 'add', function(data){
			console.log(data);
			this.setState({info: JSON.parse(data).info})
		}.bind(this))		
	},
	handleDeleteClick: function () {
		ajaxRequest ('DELETE', apiUrl + 'del', function(data){
			console.log('delete');
			this.setState({info: JSON.parse(data).info})
		}.bind(this))			
	}
}); 