import React from 'react'
import BannerLoggedIn from './banner/Banner-logged-in';
import BannerNotLoggedIn from './banner/Banner-not-logged-in';

function Banner({token}) {

    if (token) {
        return <BannerLoggedIn />
    }
    return <BannerNotLoggedIn />
}

export default Banner