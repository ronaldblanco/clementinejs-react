var React = require('react');
var Input = require('./Input');

var cont = -1;//-1,3
function colors(){
      //cont = min;
      var colors = ["list-group-item-info","list-group-item-warning","list-group-item-danger","list-group-item-success"];
      cont++;
      if(cont > -1 && cont < 2) {return colors[cont];}
      else{
         cont = 0;
         return 'list-group-item ' + colors[cont];
      } 
   }
var cont1 = 1;
function colors1(){
      //cont = min;
      var colors = ["list-group-item-info","list-group-item-warning","list-group-item-danger","list-group-item-success"];
      cont1++;
      if(cont1 > 0 && cont1 < 4) {return colors[cont1];}
      else{
         cont1 = 2;
         return 'list-group-item ' + colors[cont1];
      } 
   }
var color = '';

module.exports = React.createClass({
	render: function() {
		if (this.props.data != undefined){
			var li = this.props.data.map(function(anObjectMapped, index) {
				color = colors1();
    			return(
    				<li key={index} className="list-group-item list-group-item-info">
    					<Input index={index} name={anObjectMapped.name} />
    				</li>
    				); 
			}.bind(this));
			return(
				<div>
					<ul id="list" className="list-group">
						{li}
					</ul>
				</div>
				);
		} else {
			return (
				<div>
					<ul id="list" className="list-group">
		    			<li>
						</li>
					</ul>
				</div>
				);
		}
	} 
});