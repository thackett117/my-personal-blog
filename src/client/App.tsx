import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/api/blogs/:id/" />
				<Route exact path="/api/blogs/add" />
			</Switch>
		</Router>
	)
}

interface IAppProps { };

export default App;