import React, { useState } from 'react';
import Monster from './pages/Monster';
import ChatBot from './pages/ChatBot';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('Monster');

  return (
    <div  style={{backgroundColor: '#ffe9c7'}}>
      {/* <Monster/> */}
      <ChatBot/>
    </div >
  );
}

export default App;
