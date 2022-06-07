import "./App.css";
import React, { useState } from "react";
import { Bouton } from "./Clock/downcloks";
import "./Clock/Form.css"

function App() {
  const[Hours,setHours]=useState('');
    const[Minutes,setMinutes]=useState('');
    const[Secondes,setSecondes]=useState('');


    const heure=(e)=>{
        setHours(e.target.value)
    }
    const minut=(e)=>{
        setMinutes(e.target.value)
    }
    const second=(e)=>{
        setSecondes(e.target.value)
    }


    const endTime=new Date().getTime()+parseInt(Hours*1000*60*60+(Minutes*1000*60)+Secondes*1000);
    const[timeLeft,setEndTime]=Bouton();
    const hours=Math.floor(timeLeft/(1000*60*60))
    const minutes=Math.floor(timeLeft/60000)%60;
    const seconds=Math.floor(timeLeft/1000)%60;
    
      
        if(parseInt(Hours)>23){
        return(
          alert(`votre ${'Hours' } ne doit pas depasse ${24}`)
          )}
        if(parseInt(Minutes)>60){
        return(
          alert(`votre ${'Minutes' } ne doit pas depasse ${60}`)
          )}
        if(parseInt(Secondes)>60)
        return(
          alert(`votre ${'Secondes' } ne doit pas depasse ${60}`)
          )
      

   return (
       
    <div className="body">
          <form className="forme">
                <input type="text"required onChange={heure}value={Hours}></input>
                <label>Heure</label>
                <input type="text"required onChange={minut}value={Minutes}></input>
                <label>Minute</label>
                <input type="text"required onChange={second}value={Secondes}></input>
                <label className="seconde">seconde</label>
          </form> 
          <button className="buttom" onClick={()=>setEndTime(endTime)}>Start</button>     
        
      <p className="clock">{`${(hours.toString().padStart(2,"0"))}
           :${(minutes.toString().padStart(2,"0"))}
           :${(seconds.toString().padStart(2,"0"))}`}</p>
    
    </div>
    
  );
}

export default App;
