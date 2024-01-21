import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { message as sendMessageAction } from '../store/chatSlice';

const socket = io.connect('http://localhost:5000');

function Chat() {
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.name);
  const chat = useSelector((state) => state.chat);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit('chat', { message: msg, username: username });
    setMsg('');
  };

  useEffect(() => {
    socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error);
    });
  
    socket.on('chat', (payload) => {
      dispatch(sendMessageAction(payload));
    });
  }, [dispatch]);
  

  return (
    <div className='text-center'>
      <h1>Chat-App</h1>
      <div className='chat-container'>
        {chat.map((payload, index) => (
          <p className='p-2'  key={index} style={{ textAlign: payload.username === username ? 'right' : 'left' }}>
            <span className='p-3 mt-4 rounded border' style={{ backgroundColor: payload.username === username ? 'lightblue' : 'lightpink',borderColor:'goldenrod' }}>
              <span style={{ fontSize: '1.5rem' }}>{payload.message}</span>
              <span className='text-light'> {payload.username}</span>
            </span>
          </p>
        ))}
      </div>
      <form className='fixed-bottom d-flex mb-1 p-3' onSubmit={sendChat}>
        <input
          type='text'
          className='w-75 p-3 rounded border-dark'
          name='chat'
          placeholder='send text'
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button className='w-25 p-3 btn btn-outline-primary' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Chat;
