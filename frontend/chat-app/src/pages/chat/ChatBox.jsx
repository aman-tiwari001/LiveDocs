import { useContext, useEffect } from 'react';
import io from 'socket.io-client';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AccountContext } from '../../context/AccountProvider';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from 'react';

const ChatBox = () => {
  const socket = io('http://localhost:4000');

  const { setShowChatBox } = useContext(AccountContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    // Emit 'chat message' event to the server
    socket.emit('chat message', input);
    setInput('');
  };

  useEffect(() => {
    // Listen for 'chat message' events from the server
    socket.on('chat-msg', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className={`chatbox-container w-[100%] lg:w-[70%]`}>
      <div className='flex items-center justify-between w-[100%] px-3 py-2 border-b border-gray-600'>
        <div className='flex gap-4 items-center max-h-24'>
          {window.innerWidth < 1024 ? (
            <ArrowBackIcon
              onClick={() => setShowChatBox(false)}
              className='hover:bg-gray-700 p-1 rounded-lg'
              fontSize='large'
            />
          ) : (
            <></>
          )}
          <img
            src={
              'https://media.licdn.com/dms/image/D4D03AQFr8PtttxBR_w/profile-displayphoto-shrink_800_800/0/1672075019591?e=2147483647&v=beta&t=SOcG5xzCtLur7dJ43h5U31u_01FJBM-U2r1gZtRkkWc'
            }
            className='rounded-full w-16 h-16'
            alt=''
          />
          <div>
            <h4>AMAN TIWARI</h4>
            <p>Online</p>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-4 bg-gray-800 rounded-xl'>
            <PhoneIcon
              className='hover:bg-gray-700 p-1 rounded-bl-xl rounded-tl-xl'
              fontSize='large'
            />
            <VideocamIcon
              className='hover:bg-gray-700 p-1 rounded-br-xl rounded-tr-xl'
              fontSize='large'
            />
          </div>
          <SearchIcon
            fontSize='large'
            className='p-1 hover:bg-gray-700 rounded-lg'
          />
        </div>
      </div>
      <div className='bg-gray-800 h-[77vh]'>
        {messages.map((item, idx) => {
          return <h2 key={idx}>{item}</h2>;
        })}
      </div>
      <div className='border-t-gray-600 flex items-center justify-between py-2 px-6 fixed bottom-1 w-[100%] lg:w-[70%]'>
        <div className='flex items-center gap-2'>
          <EmojiEmotionsIcon
            fontSize='large'
            className='p-1 hover:bg-gray-700 rounded-lg'
          />
          <AttachFileIcon
            fontSize='large'
            className='p-1 hover:bg-gray-700 rounded-lg'
          />
        </div>
        <input
          className='w-[85%] rounded-xl h-full text-lg outline-none bg-slate-700 p-3'
          type='text'
          placeholder='Type a message...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendIcon
          fontSize='large'
          className='p-1 hover:bg-gray-700 rounded-lg'
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatBox;
