import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots"; //have to destructure because the robots file is not "export default"
import SearchBox from "./SearchBox";
//STATE is a description of our app, an object that describes our application, state is able to change.
//Props are simply things that come out of state e.g. STATE >> PROPS. parents pass state as props to children
//States change, props don't change.
//props are things that come out of state
//parent feeds state into child component. as soon as child component receives state, it becomes a property to the child, the child cannot change it.

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //put in curly braces becuase we are using an object //sets the searchfield value to whatever value we put in input box
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => { 
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //loops through array and returns robots that return "true" to searchfield input
     });
    return (
      <div className="tc">
        <h1 className = 'f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} /> 
        <CardList robots={filteredRobots} />{" "}
        {/* passing the state robots as a prop to the CardList as per the comments aboce. */}
      </div>
    );
  }
}

export default App;
