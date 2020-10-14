import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Study File Structure',
        completed: false,
      },
      {
        id: 2,
        title: 'Create Component',
        completed: false,
      },
      {
        id: 3,
        title: 'Study State',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
