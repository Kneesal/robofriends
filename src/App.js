import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots"; //have to destructure because the robots file is not "export default"
import SearchBox from "./SearchBox";
//STATE is a description of our app, an object that describes our application, state is able to change.
//Props are simply things that come out of state e.g. STATE >> PROPS. parents pass state as props to children


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
    const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredRobots);
}

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots} /> {/* passing the state robots as a prop to the CardList as per the comments aboce. */}
      </div>
    );
  }
}

export default App;
