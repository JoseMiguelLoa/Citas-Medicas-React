import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList/CardList';
import Search from './components/Search/Search';
function App() {
  return (
    <div className="App">
      <Search></Search>
      <CardList></CardList>
      
    </div>
  );
}

export default App;
