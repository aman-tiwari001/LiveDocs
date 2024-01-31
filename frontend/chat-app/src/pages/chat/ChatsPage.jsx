import ChatBox from './ChatBox';
import ChatsList from './ChatsList';

const ChatsPage = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-gray-900 text-white flex'>
      <ChatsList />
      <ChatBox />
    </div>
  );
};

export default ChatsPage;
