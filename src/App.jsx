import React from 'react'

import { Landing } from './containers'
import UserManager from './contexts/UserContext';
import Footer from './components/Footer';

import './App.css'

class App extends React.Component {
  render(props) {
    return (
      <div className="App">
        <UserManager>
          <Landing />
          <Footer />
        </UserManager>
      </div>
    );
  }
}

export default App;
