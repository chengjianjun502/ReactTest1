import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FirstPage from './routes/FirstPage';
import SecondPage from './routes/SecondPage';
import FourthPage from './routes/FourthPage';
import ThiredPage from './routes/ThiredPage';

function RouterConfig({ history }) {
  console.info(history);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" exact component={FirstPage} />
        <Route path="/second" exact component={SecondPage} />
        <Route path="/thired" exact component={ThiredPage} />
        <Route path="/fourth" exact component={FourthPage} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
