import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots"; //have to destructure because the robots file is not "export default"
import SearchBox from "./SearchBox";
//STATE is a description of our app, an object that describes our application, state is able to change.
//Props are simply things that come out of state e.g. STATE >> PROPS. parents pass state as props to children
//States change, props don't change.
//props are things that come out of state
//parent feeds state into child component. as soon as child component receives state, it becomes a property to the child, the child cannot change it.

class App extends Component { //this is a smart component becuase it has state, a piece of data that describes our app 
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

componentDidMount(){ //update the state in constructor ... since it updates it will run through the lifecycle again. 
    fetch('https://jsonplaceholder.typicode.com/users') //a tool for us to make requests to servers (fetch) comes in all browsers
    .then(response => response.json())
    .then(users => this.setState({robots: users })) //update the state in constructor ... since it updates it will run through the lifecycle again.
}


  onSearchChange = (event) => { //arrow function so that you can bind "this" to this class.
    this.setState({ searchfield: event.target.value }); //put in curly braces becuase we are using an object //sets the searchfield value to whatever value we put in input box
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => { 
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) //loops through array and returns robots that return "true" to searchfield input
     });

     if (this.state.robots.length === 0) {
        return <h1 className="tc">Loading...</h1>
     } else {
    return (
      <div className="tc">
        <h1 className = 'f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} /> {/*passing the onsSearchChange function state to Search Box, which will be called by a "onChange" attribute*/}
        <CardList robots={filteredRobots} />{" "}
        {/* passing the state robots as a prop to the CardList as per the comments aboce. */}
      </div>
    );
    }
  }
}

export default App;
