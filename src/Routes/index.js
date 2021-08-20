import { Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Groups from '../Pages/Groups';
import Route  from './route'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route isPrivate path='/dashboard' component={Dashboard} />
            <Route isPrivate path='/groups' component={Groups} />
        </Switch>
    ); 
}

export default Routes;