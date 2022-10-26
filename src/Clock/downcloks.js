import React,{useState,useRef,useEffect} from "react";

const calcTimeLeft=end=>{
    if(!end)return 0;
    const left=end - new Date().getTime();
     if(left<0)return 0;
     return left;
}
export function Bouton(endTime){
const [end,setEndTime]=useState(endTime)
const[timeLeft,setTimeLeft]=useState(()=>calcTimeLeft(end));

useEffect(()=>{
    setTimeLeft(calcTimeLeft(end));
    const timer=setInterval(()=>{
        const targetLeft=calcTimeLeft(end);
        setTimeLeft(targetLeft)

        if(targetLeft===0){
            clearInterval(timer);
        }
    });
    return()=>clearInterval(timer);
},[end]);

return[timeLeft,setEndTime];
}
