import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const users=[
  {
    name:"Oleg",
    phone:"+380666555"
  },
  {
    name:"Max",
    phone:"3213423231 "
  }
]
const reRenderDom=(users)=>{
  root.render(
    <App users={users} reRenderDom={reRenderDom}/>
  );
}
reRenderDom(users)

reportWebVitals();
