//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Regis from './Components/Registration';
import Login from './Components/Login';
import Display from './Components/Display';
import EditTable from './Components/Table';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';

function App() {

  return (

  <Provider store={store} >
    <BrowserRouter  >
      <Switch>
        <Route exact path="/" component={Regis} />
        <Route exact path="/Regis" component={Regis} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Display" component={Display} />
        <Route exact path="/EditTable" component={EditTable} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
