import { useState } from 'react';
import getToken from './getToken';
import getUserID from './getUserID';
import saveUserID from './saveUserID';
import saveToken from './saveToken';

function useUser() {

    const localInfo = {
        token: getToken() ? getToken() : "",
        userId: getUserID() ? getUserID() : ""
    }
    const [user, setUser] = useState(localInfo);
    
    const editUser = (user) => {
        setUser(user);
        saveUserID(user.userId);
        saveToken(user.token);
    }
    
    return {
        user: user,
        setUser: editUser
    }
}

export default useUser