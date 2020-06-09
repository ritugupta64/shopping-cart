import React from 'react';
import {Link} from 'react-router-dom'
import {routes} from '../../routes/routes'
import {auth} from '../../firebase/firebase.utils'


export const Header = ({currentUser}) => {
    return(
        <>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.shop}>Shop</Link>
       {
           currentUser ? <div onClick={() => auth.signOut()}>SIGN OUT</div> : 
          ( <Link to={routes.signIn}>Sign In</Link>)
       }
        </>
    )
}