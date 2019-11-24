import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Chats from './containers/Chats';

function App() {
  return (
    <div className="app-wraper">
        <Chats />
    </div>
  );
}

export default App;
