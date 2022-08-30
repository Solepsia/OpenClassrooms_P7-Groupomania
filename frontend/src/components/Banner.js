import React, { useContext } from 'react'
import { UserContext } from './App';
import BannerLoggedIn from './banner/Banner-logged-in';
import BannerNotLoggedIn from './banner/Banner-not-logged-in';

function Banner() {
    const user = useContext(UserContext);

    if (user.token) {
        return <BannerLoggedIn />
    }
    return <BannerNotLoggedIn />
}

export default Banner