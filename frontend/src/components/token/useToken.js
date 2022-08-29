import { useState } from 'react';
import getToken from './getToken';
import saveToken from './saveToken';

function useToken() {
  const [token, setToken] = useState(getToken());
  return {
    setToken: saveToken,
    token
  }
}

export default useToken