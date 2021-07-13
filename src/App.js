import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './component/home.jsx'
import Cart from './component/cart.jsx'
import Checkout from './component/checkout.jsx'
import CenteredGrid from './component/grid.jsx'
import Login from './component/user/login'


function App({ location }) {
  return (
      <Router>
        <Switch>
          <Route location={location} exact path='/' component={Home}/>
          <Route location={location} path='/checkout' component={Checkout} />
          <Route location={location} path='/login' component={Login} />
          <Route location={location} path='/cart' component={Cart} />
          {/* <Route path='/grid' component={CenteredGrid} /> */}
        </Switch> 
      </Router>
  )
}

export default App;
