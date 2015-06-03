import React from 'react';
import Quiz from './quiz';




var configuration = {
	getInitialState: function(){
		return {
			quizzes: [
						{logo: 'app/src/images/workshops/JS.png', technology: 'JavaScript', id:12, quizzes: []},
						{logo: 'app/src/images/workshops/angularjs.png', technology: 'AngularJS', id:20, quizzes: []},
						{logo: 'app/src/images/workshops/nodejs.png', technology: 'NodeJS', id:32, quizzes: []}]
		}
	},
	render: function(){
		var quizzes = this.state.quizzes;

		return	(
					<div className="row quizzes">
						{this.state.quizzes.map((quiz) => {
							return <Quiz key={quiz.id} datasource={quiz} />
						})}
					</div>
				);
	}
};

var Quizzes = React.createClass(configuration);

export default Quizzes;