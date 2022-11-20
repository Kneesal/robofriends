import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'
import Card from './Card'; // "./" means to access the file in this directory. 
// In some of the above there is no"./" and react knows to find the file outside of this directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
      <Card id = {robots[1].id} name = {robots[1].name} email = {robots[1].email} />
      <Card id = {robots[2].id} name = {robots[2].name} email = {robots[2].email}/>
      <Card id = {robots[4].id} name = {robots[4].name} email = {robots[4].email}/>
      <Card id = {robots[5].id} name = {robots[5].name} email = {robots[5].email}/>
      <Card id = {robots[6].id} name = {robots[6].name} email = {robots[6].email}/>
      <Card id = {robots[7].id} name = {robots[7].name} email = {robots[7].email}/>
      <Card id = {robots[8].id} name = {robots[8].name} email = {robots[8].email}/>
      <Card id = {robots[9].id} name = {robots[9].name} email = {robots[9].email}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// username = {robots[0].username}
