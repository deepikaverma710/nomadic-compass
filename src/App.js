import React, {useContext} from 'react';
import { Redirect,Route, Switch} from 'react-router-dom'
import {firebaseAuth} from './context/ContextIndex'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'

function PrivateRoute({component: Component, token, ...rest}) {
  return(
  <Route
  {...rest}
  render={(props) => token != null  
    ? <Component {...props} {...rest} />
    : <Redirect to ='/login' />} />
  )
}

function App() {
const { token } = useContext(firebaseAuth)
console.log(token)

return (
<Switch>
  <PrivateRoute exact path='/' component = {Home} token={token} />
  <Route exact path='/register' component={Register} />
  <Route exact path='/login' component={Login} />
  </Switch>
  );
}

export default App;
