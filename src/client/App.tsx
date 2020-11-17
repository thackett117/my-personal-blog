import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import SingleBlog from './Components/SingleBlog';
import AddBlog from './Components/AddBlog';
import BlogAdmin from './Components/BlogAdmin';

const App: React.FC<IAppProps> = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/blogs/add" component={AddBlog} />
				<Route exact path="/blogs/:id/" component={SingleBlog} />
				<Route exact path="/blogs/:id/admin" component={BlogAdmin} />
			</Switch>
		</Router>
	)
}

interface IAppProps { };

export default App;