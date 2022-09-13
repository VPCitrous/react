import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/pages/Home.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About';
import Contact from './components/pages/contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/users/add' component={AddUser}/>
          <Route exact path='/users/edit/:id' component={EditUser}/>
          <Route exact path='/users/viewuser/:id' component={Users}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
