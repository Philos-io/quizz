import React from 'react';
import mui from 'material-ui';
import ThemeManagerFunc from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';

var ThemeManager = ThemeManagerFunc();

var {
  	AppBar 
 } = mui;

var App = React.createClass({
	childContextTypes: {
  	muiTheme: React.PropTypes.object
	},

	getChildContext: function() {
  	return {
  		muiTheme: ThemeManager.getCurrentTheme()
  	};
	},

	componentWillMount: function() {
  	ThemeManager.setPalette({
    		accent1Color: Colors.deepOrange500
    });
	},
	
	render: function(){
		return ( <AppBar title='Philos Quizz' iconClassNameRight="muidocs-icon-navigation-expand-more" /> );
	}
});


React.render(<App/>, document.getElementById('wrapper'));