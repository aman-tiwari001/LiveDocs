import { useContext } from 'react';
import ChatBox from './ChatBox';
import ChatsList from './ChatsList';
import { AccountContext } from '../../context/AccountProvider';

const ChatsPage = () => {
  const { showChatBox } = useContext(AccountContext);

  return (
    <div className='h-[100vh] w-[100vw] bg-gray-900 text-white flex'>
      {window.innerWidth < 1024 ? (
        showChatBox ? (
          <ChatBox />
        ) : (
          <ChatsList />
        )
      ) : (
        <>
          <ChatsList /> {showChatBox ? <ChatBox /> : <></>}
        </>
      )}
    </div>
  );
};

export default ChatsPage;
