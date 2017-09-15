var React = require('react');
var Link = require('react-router').Link;
var apiUrl = window.location.origin + '/auth/localnew';
var ajaxRequest = require('../ajax-functions');

var message = document.querySelector('#message') || null;

function updateMess (data){
      var info = JSON.parse(data);
      if(info.message != null && info.message != undefined){
         message.innerHTML = '<div class="'+info.type+'"><h2>'+ info.message +'</h2></div>';
      }
   }

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div>
					<div className="" id="message"></div>
					
					<img src="/public/img/clementine_150.png" />
					<br />
					<p className="clementine-text">Clementine.js</p>
					<Link className="menu" className="btn" id="login-btn" to={"/LocalLogin"}>Login Local User</Link>
					<Link className="menu" className="btn" id="login-btn" to={"/LocalCreate"}>Create Local User</Link>
					<Link className="menu" to={"/login"}>Return to Login Page</Link>
				</div>
				
				<div>
					<div className="alert alert-warning"><h5>Only valid if your username is a valid email!</h5></div><br/> 
					<label>Username:</label><input type="text" name="name" id="resetusername" className="form-control" placeholder="Email" />
					<br/>  
					<btn type="submit" onClick={this.resetAction} className="btn btn-add btn-primary" id ="resetaction"
					text="Reset!">Submit</btn>
				</div>
			</div>
		);
	},
	resetAction: function(){
		message = document.querySelector('#message');
		//document.querySelector('#resetaction').addEventListener('click', function(){
            var resetUsername = document.querySelector('#resetusername').value;
            ajaxRequest('POST', apiUrl + 'reset?name=' + resetUsername, function () {
               ajaxRequest('GET', apiUrl+'message', updateMess);
              
            });
         //});
	}
});