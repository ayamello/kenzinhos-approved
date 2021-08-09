import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
}

export default Routes;