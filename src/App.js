import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <main>
              <div className="sidebar">
                <div>
                  <Link to='/'>List</Link>
                </div>
                <div>
                  <Link to='/create'>Create</Link>
                </div>
              </div>
              <div className="content">
            <Switch>
              <Route 
                path="/"
                exact
                render={(routerProps) => <ListPage {...routerProps} />}
              />
              <Route 
                path="/create"
                exact
                render={(routerProps) => <CreatePage {...routerProps} />}
              /> 
              <Route 
                path="/detail/:id"
                exact
                render={(routerProps) => <DetailPage {...routerProps} />}
              />  
            </Switch>
          </div>

          </main>
          </Router>         
        </header>
        </div>
    );
  }
}

