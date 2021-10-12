// 1) store.js
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/Reducers";
const store = createStore(rootReducers, applyMiddleware(thunk))
export default store


// 2) app.js
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Provider } from "react-redux"
import store from './store/Store';

function App() {
  window.store = store
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;


// 3) actions(folder)--> constants.js
export const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST"
}


// 4) reducers(folder)--> auth.reducer.js
import { authConstants } from "../actions/constants"
const initState = {}

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload
      }
      break;
  }
  return state
}


// 5) reducers(folder)--> reducer.js
import authReducers from "./auth.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducers
})

export default rootReducer;


// 6) actions(folder)--> auth.actions.js
import { authConstants } from "./constants"

export const login = (user) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user
      }
    })
  }
}

// 7) actions(folder)--> actions.js
export * from "./auth.actions"


