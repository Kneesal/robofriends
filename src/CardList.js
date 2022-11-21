import React from "react";
import Card from "./Card";
// import { robots } from "./robots";

const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={user.id} //destructure object in array and pass object props to Card Component to use
            id={robots[index].id} //destructure object in array and pass object props to Card Component to use
            name={robots[index].name} //destructure object in array and pass object props to Card Component to use
            email={robots[index].email} //destructure object in array and pass object props to Card Component to use
          />
        );
      })}
    </div>
  );
};

export default CardList;