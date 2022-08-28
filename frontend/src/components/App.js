import Banner from './Banner'
import Timeline from './Timeline'
import LogIn from './Login'
import SignUp from './Signup'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Banner />

        <Switch>
          <Route path='/' element={<Timeline />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App