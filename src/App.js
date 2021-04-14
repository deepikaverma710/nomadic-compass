import React, {useContext} from 'react';
import { Redirect,Route, Switch} from 'react-router-dom';
import {firebaseAuth} from './context/ContextIndex';
import Register from './components/auth/Register';
import Home from './pages/home/Home';
import Login from './components/auth/Login';
import Details from './pages/productDetails/Details';
import Cart from './pages/cart/Cart';

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
  <Route exact path='/details' component={Details} />
  <Route exact path='/cart' component={Cart} />
  </Switch>
  );
}

export default App;
