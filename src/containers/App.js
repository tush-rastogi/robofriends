import React from 'react';
import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// This component is father of all components (root)
function App() {

  const [robots, setrobots] = useState([]);
  const [searchField, setsearchField] = useState('');

  const OnSearchChange = (event) => {

    // this.setState({ searchField: event.target.value });
    setsearchField(event.target.value);

  }

  useEffect(() => {

      // console.log("hello");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setrobots(users));
        //  console.log("hello");
  },[]) // [] means useEffect code runs only during initial render.



  const filterRobot = robots.filter(robots => {

    return robots.name.toLowerCase().includes(searchField.toLowerCase());

  }

  )

  return (
    <div className="tc">
      <h1 className='f2'>Robofriends</h1>
      <SearchBox Searchchange={OnSearchChange} />

      <Scroll>
        <ErrorBoundary>
          <CardList robots={filterRobot} />
        </ErrorBoundary>
      </Scroll>

    </div>
  )

}

export default App;
