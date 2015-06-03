import React from 'react';
import mui from 'material-ui';
import Quizzes from './quizzes';
import Router from 'react-router';
// import ThemeManagerFunc from 'material-ui/lib/styles/theme-manager';
// import Colors from 'material-ui/lib/styles/colors';


var {
  	AppBar,
  	Styles
 } = mui;

 var {
 	Colors
 } = Styles;

var ThemeManager = mui.Styles.ThemeManager();


var App = React.createClass({

	contextTypes: {
    	router: React.PropTypes.func
  	},

	childContextTypes: {
  		muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
	  	return {
	  		muiTheme: ThemeManager.getCurrentTheme()
	  	};
	},

	componentWillMount: function() {
		
		ThemeManager.setTheme(ThemeManager.types.DARK);

	  	ThemeManager.setPalette({
	    		accent1Color: Colors.deepOrange500
	    });
	},
	
	render: function(){
		return ( 
				<div>
					<AppBar title='Philos Quizz'/>
					<br/>

					<div className="container">
						<Quizzes/>
					</div>
				</div>
			);
	}
});


React.render(<App/>, document.getElementById('wrapper'));