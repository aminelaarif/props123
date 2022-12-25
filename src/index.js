import React from 'react';
import ReactDOM from 'react-dom/client';
import Adresse from './Adresse';
import Fullname from './Fullname';
import Profession from './Profession';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

  <Fullname name="amine"></Fullname>

    <Adresse name="sousse/akouda"></Adresse>
    <Profession name="aide soingnant"></Profession>
  </React.StrictMode>
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

