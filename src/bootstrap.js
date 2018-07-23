import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../.cache/typescript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../../../.cache/typescript/2.9/node_modules/@types/react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './components/layout';

import Signup from './components/auth/signup';
import Signin from './components/auth/signin';

import history from './history';
import requireAuth from './components/requireAuth';
import Dashboard from './component/dashboard';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/dashboard' component={requireAuth(Dashboard)}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
