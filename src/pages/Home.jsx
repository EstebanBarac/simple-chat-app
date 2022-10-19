import Chat from '../components/Chat.jsx';
import React from 'react'
import Sidebar from '../components/Sidebar.jsx';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
    </div>
  )
}
