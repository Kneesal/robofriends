import React, { Component } from "react";
import CardList from "../Components/CardList";
// import { robots } from "./robots"; //have to destructure because the robots file is not "export default"
import SearchBox from "../Components/SearchBox";
//STATE is a description of our app, an object that describes our application, state is able to change.
//Props are simply things that come out of state e.g. STATE >> PROPS. parents pass state as props to children
//States change, props don't change.
//props are things that come out of state
//parent feeds state into child component. as soon as child component receives state, it becomes a property to the child, the child cannot change it.
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
class App extends Component { //this is a smart component becuase it has state, a piece of data that describes our app 
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

componentDidMount(){ //update the state in constructor ... since it updates it will run through the lifecycle again.  //this is called a lifecycle hook
    fetch('https://jsonplaceholder.typicode.com/users') //a tool for us to make requests to servers (fetch) comes in all browsers
    .then(response => response.json())
    .then(users => this.setState({robots: users })) //update the state in constructor ... since it updates it will run through the lifecycle again.
}


  onSearchChange = (event) => { //arrow function so that you can bind "this" to this class.
    this.setState({ searchfield: event.target.value }); //put in curly braces becuase we are using an object //sets the searchfield value to whatever value we put in input box
    console.log(event)
  };

  render() {
    const {robots, searchfield } = this.state // destructre this.state so that you don't have to put this.state.robots/searchfield everytime you want to reference it
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase())) //loops through array and returns robots that return "true" to searchfield input);
     return !robots.length ?
      <h1>Loading...</h1>: 
     (
      <div className="tc">
        <h1 className = 'f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} /> {/*passing the onsSearchChange function state to Search Box, which will be called by a "onChange" attribute*/}
        <Scroll>
        <ErrorBoundary>
            <CardList robot={filteredRobots} /> {/* passing the state filtered robots array to the cardList */}
        </ErrorBoundary>
        </Scroll>
      </div>
    );
    
  }
}

export default App;
