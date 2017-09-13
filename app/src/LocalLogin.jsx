var React = require('react');
var Routes = require('./LocalRoutes');

var ajax = require('./ajax-functions');
var appUrl = window.location.origin;
var apiUrl = appUrl + '/authlocal';

module.exports = React.createClass({
  getInitialState: function() {
    return({
      //local: false
      //user: undefined,
      //response: false
    });
  },
  componentDidMount: function() {
   /* if(!this.state.user){
      ajax('GET', apiUrl, function(data){
        if (data == 'no user'){
          this.setState({
            user: 'Local'
          });
        }
        this.setState({
          response: true
        });
      }.bind(this));      
    }*/
  },
  render: function() {
      //if(this.state.response){
        return (
          <LocalRoutes />
        );   
        
        
        
      //} else {
        /*return (
          <div>Loading....</div>
        );*/
      //}
  }
});
