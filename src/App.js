import Home from './Components/Home'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login'

function App() {
  return (
   
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
       
      </Switch>
    </>
      
  );
}

export default App;
