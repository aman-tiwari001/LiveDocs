import PhoneIcon from '@mui/icons-material/Phone';
const ChatBox = () => {
  return (
    <div className='w-[70%]'>
      <div className='flex justify-between w-[100%] px-3 py-2 border-b border-gray-600'>
        <div className='flex gap-4'>
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
        <PhoneIcon />
      </div>
    </div>
  );
};

export default ChatBox;
