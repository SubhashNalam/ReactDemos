import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


/*ReactDOM.render(
 <React.StrictMode>
    <App />
 </React.StrictMode>,
  document.getElementById('root')
);*/
/* function formatName(user){
 return user.fName + '' + user.lName;
}
const user = {
  fName:'Subhash',
  lName:'Nalam'
}
function greet(user){
   if(user)
   return(<h1>Hello {formatName(user)}</h1>)
   else 
     return (<h1>Hello Stranger !</h1>)
}
const element = greet(user);
//const element1 = greet();
ReactDOM.render(element,document.getElementById('root'));
//ReactDOM.render(element1,document.getElementById('root')); */
function formatName(user1) {
    return user1.fName + '' + user1.lName;
}
const user1 = {
    fName: 'Subhash',
    lName: 'Nalam',
    image: 'img3.jpg'
}
const element = < div > < h1 > This is { formatName(user1) } < /h1> <
    img alt = ''
src = { user1.image } > < /img></div >
    ReactDOM.render(element, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();