import Banner from './Banner'
import Timeline from './Timeline'
import LogIn from './Login'
import SignUp from './Signup'
import NewPost from './NewPost'
import EditPost from './EditPost'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route 
} from 'react-router-dom';
import useToken from './token/useToken';

function App() {

  const {token, setToken} = useToken();
  
  return (
    <Router>
      <div>
        <Banner token={token} />

        <Switch>
          <Route path='/login' element={<LogIn setToken={setToken}/>}/>
          <Route path='/' element={<Timeline />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/newPost' element={<NewPost token={token}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App