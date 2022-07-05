import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/736x/59/1e/08/591e0856855d48a4dc4ec5e123a10cff.jpg' />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <img src="https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"/>
      </div>
    </div>
  );
}


export default App;
