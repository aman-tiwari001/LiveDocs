import { useContext } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import ProfileDrawer from './drawers/profileDrawer';
import SearchIcon from '@mui/icons-material/Search';
import { AccountContext } from '../../context/AccountProvider';

const chatArray = [
  {
    name: 'Aman Tiwari',
    pic: 'https://media.licdn.com/dms/image/D4D03AQFr8PtttxBR_w/profile-displayphoto-shrink_800_800/0/1672075019591?e=2147483647&v=beta&t=SOcG5xzCtLur7dJ43h5U31u_01FJBM-U2r1gZtRkkWc',
    lastMsg: 'hello dtu ❤',
    date: Date().slice(4, 15),
  },
  {
    name: 'Saransh Kumar',
    pic: 'https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.webp?b=1&s=170667a&w=0&k=20&c=Y9fE0UrJiqEADUBx5ccBkExhSmnV5eyQ9kPMeGecGoM=',
    lastMsg: 'hello dtu ❤',
    date: Date().slice(4, 15),
  },
  {
    name: 'Nikhil DTU',
    pic: 'https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.webp?b=1&s=170667a&w=0&k=20&c=hOYpnliBsXaoVHh9qp4BnksjwzFn4S7i8dWQMBlQggY=',
    lastMsg: 'how r u? 😊',
    date: Date().slice(4, 15),
  },
  {
    name: 'Raman Sharma',
    pic: 'https://img.freepik.com/free-photo/indian-man-student-shirt-posed-outdoor_627829-2276.jpg',
    lastMsg: 'nice 👍',
    date: Date().slice(4, 15),
  },
  {
    name: 'Deepak Sachdeva',
    pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWERD5PJAdsjlBuOARYeVnBHKJp0Nxf1Gpg&usqp=CAU',
    lastMsg: 'whatssupp',
    date: Date().slice(4, 15),
  },
];

const ChatsList = () => {
  const { setShowChatBox, setShowProfileDrawer } =
    useContext(AccountContext);

  const handleChat = () => {
    setShowChatBox(true);
  };
  return (
    <div className='chatlist-container w-[100%] lg:w-[30%] border-r border-gray-600'>
      <ProfileDrawer />
      <div>
        <div className='flex items-center justify-between px-5 py-3 mb-2'>
          <h2>ChatzApp🚀</h2>
          <ChatIcon
            fontSize='large'
            className='p-1 hover:bg-gray-700 rounded-lg'
            onClick={() => setShowProfileDrawer(true)}
          />
        </div>
        <div className='text-center flex gap-1 mx-2 px-3 items-center border border-black rounded-xl bg-gray-700 text-lg'>
          <SearchIcon />
          <input
            className='w-[100%] outline-none py-2 px-1 bg-gray-700'
            type='text'
            placeholder='Search chats...'
          />
        </div>
      </div>
      <div>
        {chatArray.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={handleChat}
              className='flex justify-between my-2 hover:bg-gray-800 mx-2 rounded-xl py-2 px-3'
            >
              <div className='flex gap-4'>
                <img src={item.pic} className='rounded-full w-16 h-16' alt='' />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.lastMsg}</p>
                </div>
              </div>
              <p className='text-[14px]'>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatsList;
