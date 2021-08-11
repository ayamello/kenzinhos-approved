import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    ); 
}

export default Routes;