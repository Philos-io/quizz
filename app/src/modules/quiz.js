import React from 'react';
import mui from 'material-ui';
import Router from 'react-router';


var 
{ 
	Dialog,
	Paper 
} = mui;


var configurations = {
	// getInitialState:function(){
	// 	return {
	// 		modal: 
	// 	}
	// }
	contextTypes: {
    	router: React.PropTypes.func
  	},

	render: function(){
		return (
					<div className="paper col-lg-4 col-md-6 col-xs-6 thumbnail" onClick={this._login}>
				  		<img src={this.props.datasource.logo}/>
					</div>
				);
	},

	_login: function(){
		// If the user is not connected then show login dialogBox
		// var standardActions = [
		//   { text: 'Cancel' },
		//   { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
		// ];

		// return (
		// 			<Dialog title="Dialog With Standard Actions"
		// 			  actions={standardActions}
		// 			  actionFocus="submit"
		// 			  modal={this.state.modal}>
		// 			  The actions in this window are created from the json that's passed in.</Dialog>				
		// 		);

		this.context.router.transitionTo('quizDetails');
	}
};


var Quiz = React.createClass(configurations);

export default Quiz;