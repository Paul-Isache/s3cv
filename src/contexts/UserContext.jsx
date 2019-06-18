import React, { useState } from 'react'

export const UserContext = React.createContext({})

function UserManager({ children }) {
  const [user, setValue] = useState(JSON.parse(window.localStorage.getItem('user')))

  const setUser = (value) => {
    setValue(value);
    window.localStorage.setItem('user', JSON.stringify(value));
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserManager;