import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'


function App() {

  return (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    </Switch>
  );
}

export default App;
