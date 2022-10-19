import React, { useContext } from 'react'
import './Components.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Messages from './Messages';
import Input from './Input.jsx';
import { ChatContext } from "../context/ChatContext";

export default function Chat() {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
       <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideocamIcon id='icons'/>
          <PersonAddIcon id='icons'/>
          <MoreHorizIcon id='icons'/>
        </div>
       </div>
       <Messages />
       <Input />
    </div>
  )
}
