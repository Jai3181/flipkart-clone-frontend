import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Provider } from "react-redux"
import store from './store/Store';
import PrivateRoute from './components/HOC/PrivateRoute';

function App() {
  window.store = store
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
