import React from 'react';
import ReactDOM from 'react-dom';
import Cards from "./Cards.jsx";
import Sdata from "./Sdata";
import './index.css'

function ncard(val){
return
}


ReactDOM.render(
  <>
  <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>
 
{Sdata.map((val)=>{
  return  (
<Cards
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
   />
);
})}

  </>,
   document.getElementById('root'));