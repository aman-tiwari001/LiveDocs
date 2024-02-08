import { createContext, useState } from 'react';

export const AccountContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState({name:"", email:""});
  const [showChatBox, setShowChatBox] = useState(false);
  const [showProfileDrawer, setShowProfileDrawer] = useState(false);

  return (
    
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        showChatBox,
        setShowChatBox,
        showProfileDrawer,
        setShowProfileDrawer,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
