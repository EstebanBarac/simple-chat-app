import React, { useContext } from 'react'
import './Components.css';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
       <span className='logo'>E.M.A Chat</span>
       <div className='user'>
          <img src={currentUser.photoURL} alt='' />
          <span>{currentUser.displayName}</span>
          <button onClick={()=>signOut(auth)}>cerrar sesión</button>
       </div>
    </div>
  )
}
