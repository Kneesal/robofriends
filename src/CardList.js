import React from "react";
import Card from "./Card";
// import { robots } from "./robots";

const CardList = ({robot}) => {
  return (
    <div>
      {robot.map((user, index) => { //iterates through robot array passed from filtered robots array in App.js
        return (
          <Card
            key={user.id} //destructure object in array and pass object props to Card Component to use
            id={robot[index].id} //destructure object in array and pass object props to Card Component to use
            name={robot[index].name} //destructure object in array and pass object props to Card Component to use
            email={robot[index].email} //destructure object in array and pass object props to Card Component to use
          />
        );
      })}
    </div>
  );
};

export default CardList;