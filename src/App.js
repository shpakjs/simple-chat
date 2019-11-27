import React from 'react';
import './App.css';
import Chats from './containers/Chats';
import {chatApi} from './api/requests';
import Login from './containers/Login';
import {Route,BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  state = {
    users : [],
    currentUserId :  localStorage.getItem('simpleChatUserId')
  }

  componentDidMount() {
    chatApi.getUsers().then(response => {
        this.setState({ users: response });
    });
  }
  onLoginSuccess = () => {
    this.setState({ currentUserId: localStorage.getItem('simpleChatUserId') })
  }
  onLogout = () => {
    this.setState({ currentUserId: null });
  }
  render() {
    return (
      <div className="app-wraper"> 
        <BrowserRouter>
          <Route  exact path='/' render =  { () => <Chats users={this.state.users} userId={this.state.currentUserId} onLogout={this.onLogout}/>} />
          <Route path= '/login' render = { () => <Login users={this.state.users} onLoginSuccess={this.onLoginSuccess} /> } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
