import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'


function App() {

  return (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
    </Switch>
  );
}

export default App;
