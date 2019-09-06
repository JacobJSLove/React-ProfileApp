import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import './App.scss'
import ShowProfile from './profile/ShowProfile';


// To do
// Pick profile from random id 
//<Route path="/profile/:id" exact component={ShowProfile} />

const App = () => {
    return (
        <div className="container__wrapper">
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={ShowProfile} />
				</Switch>
			</Router>
		</div>
    )
};

export default App;