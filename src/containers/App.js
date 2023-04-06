import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// This component is father of all components (root)
class App extends React.Component {

  constructor() {

    super();

    this.state = {
      robots: [],
      searchField: ''
    }


  }
  // Rule of thumb : in react except prebuilt function use arrow function always

  OnSearchChange = (event) => {

    this.setState({ searchField: event.target.value });



  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }));

  }

  render() {

    const filterRobot = this.state.robots.filter(robots => {

      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());

    }

    )


    return (
      <div className="tc">
        <h1 className='f2'>Robofriends</h1>


        <SearchBox Searchchange={this.OnSearchChange} />

        <Scroll>
          <ErrorBoundary>
          <CardList robots={filterRobot} />
          </ErrorBoundary>
        </Scroll>


      </div>
    )



  }



}

export default App;
