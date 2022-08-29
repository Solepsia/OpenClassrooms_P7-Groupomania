import React from 'react'
import BannerLoggedIn from './banner/Banner-logged-in';
import BannerNotLoggedIn from './banner/Banner-not-logged-in';

function Banner({token}) {

    if (token) {
        return <BannerLoggedIn />
    }
    return <BannerNotLoggedIn />
}


// si user pas log : Logo, bouton "Log In" => page de connexion, bouton "Inscription" => page d'inscription
// si user log : Logo, bouton "New Post" => page de création de post, bouton "Log Out" => sessionStorage.clear() => reload

export default Banner