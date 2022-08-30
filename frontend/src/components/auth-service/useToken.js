import { useState } from 'react';
import getToken from './getToken';
import saveToken from './saveToken';

function useToken() {
  const [token, setToken] = useState(getToken());

  const editToken = (token) => {
    setToken(token);
    saveToken(token);
  }
  
  return {
    setToken: editToken,
    token
  }
}

export default useToken