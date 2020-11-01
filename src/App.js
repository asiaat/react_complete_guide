import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: '123', name: 'Max', age: 28},
      {id: '124', name: 'Kalle', age: 51},
      {id: '125', name: 'Mai', age: 18}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key     = {person.id} 
              changed = {(event) => this.nameChangedHandler(event, person.id)} 
              click   = {() => this.deletePersonHandler(index)}
              name    = {person.name}
              age     = {person.age}/>
          })}
       
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'am React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}> Switch Name</button>        
          {persons}
      </div>
    );
  }
}

export default App;
