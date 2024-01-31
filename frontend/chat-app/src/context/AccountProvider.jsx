import { createContext, useState } from 'react';

export const AccountContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
