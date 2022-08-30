import Banner from './Banner'
import Timeline from './Timeline'
import LogIn from './Login'
import SignUp from './Signup'
import NewPost from './NewPost'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route 
} from 'react-router-dom';
// import useToken from './auth-service/useToken';
import { createContext, useState } from 'react'
// import getToken from './auth-service/getToken'
import useUser from './auth-service/useUser'

export const UserContext = createContext();

function App() {

  const {user, setUser} = useUser();
  // const {token, setToken} = useToken();
  
  return (
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <Banner />
    
          <Switch>
            <Route path='/login' element={<LogIn setUser={setUser}/>}/>
            <Route path='/' element={<Timeline />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/newPost' element={<NewPost />}/>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App