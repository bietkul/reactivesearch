import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import createHistory from 'history/createBrowserHistory'; // eslint-disable-line

const Loading = () => <div />;

const HomePage = Loadable({
	loader: () => import('./pages/web/home'),
	loading: Loading,
});
const ToolsPage = Loadable({
	loader: () => import('./pages/web/tools'),
	loading: Loading,
});
const LearnPage = Loadable({
	loader: () => import('./pages/web/learn'),
	loading: Loading,
});

const history = createHistory({
	basename: process.env.NODE_ENV === 'production' ? '/reactivesearch' : '/',
});

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/tools" component={ToolsPage} />
			<Route exact path="/learn" component={LearnPage} />
			<Route path="*" component={HomePage} />
		</Switch>
	</Router>,
	document.getElementById('root'),
);
