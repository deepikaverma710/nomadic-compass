import React, {useContext} from 'react';
import { Redirect,Route, Switch} from 'react-router-dom'
import {firebaseAuth} from './context/ContextIndex'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Details from './pages/productDetails/Details';
import Cart from './pages/cart/Cart';

import HomePage from './pages/homepage/HomePage';

import Summary from './pages/packageSummary/Summary';
import Admin from './pages/admin/Admin';



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
  <Route exact path='/' component = {HomePage}  />
  <Route exact path='/register' component={Register} />
  <Route exact path='/login' component={Login} />

  <Route exact path='/:selectedActivity/:selectedDestination/:selectedPackage' component={Details} />

  <PrivateRoute exact path='/summary/:selectedActivity/:selectedDestination/:dateid' component={Summary} token={token}/>
  <PrivateRoute exact path='/cart' component={Cart} token={token} />

  </Switch>
  );
}

export default App;
