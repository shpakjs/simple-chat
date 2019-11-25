import React from 'react';
import './App.css';
import Chats from './containers/Chats';
import {chatApi} from './api/requests';

class App extends React.Component {
  state = {
    users : [],
    currentUserId : null
  }

  initialize() {
    chatApi.getUsers().then(users => {
      let randomUser = 2;// Math.floor(Math.random() * Math.floor(users.length));
      this.setState({ users: users, currentUserId: users[randomUser].id });
    });   
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div className="app-wraper">
        { this.state.currentUserId && <Chats users={this.state.users} userId={this.state.currentUserId} /> }
      </div>
    );
  }
}

export default App;
