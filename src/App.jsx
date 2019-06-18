import React from 'react'

import { Landing } from './containers'
import UserManager from './contexts/UserContext';
import './App.css'

class App extends React.Component {
  render(props) {
    return (
      <div className="App">
        <UserManager>
          <Landing />
        </UserManager>
      </div>
    );
  }
}

export default App;
