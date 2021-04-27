import { UPDATE } from "mobx/dist/internal";
import React from "react";
import {BodyStyle,Container,ProgressContainer,Progress,Circle,Button} from "./styled";

// if (process.browser) {
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circles");


let currentActive = 1;

next.addEventListener("click",()=>{
  currentActive++;
  if(currentActive > circles.length){
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click",()=>{
  currentActive--;
  if(currentActive < 1){
    currentActive = 1;
  }
  update();
});

function update(){
  circles.forEach((circle,idx)=>{
    if(idx < currentActive){
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1)/(circles.length-1)) * 100 + "%";

// if(currentActive === 1){
//   prev.disabled = true;
// } else if (currentActive === circles.length){
//   next.disabled = true;
// }else{
//   prev.disabled = false;
//   next.disabled = false;
// }
  }   
// }




export const ProgressBar = ({
}) => {
  return (
    <BodyStyle>
      <Container>
        <ProgressContainer>
        <Progress>
    {/* <div className="bodyStyle"> */}
    {/* <div className="container"> */}
      {/* <div className="progress-container"> */}
      
        {/* <div className="progress" id="progress"> */}
        <div id="progress">
          <Circle></Circle> 
          <Circle></Circle> 
          <Circle></Circle> 
          <Circle></Circle> 
          <Circle></Circle> 
          {/* <div className="circle active"></div>
          <div className="circle active"></div>
          <div className="circle active"></div>
          <div className="circle active"></div>
          <div className="circle active"></div>  */}
        </div>       
        {/* </div> */}
      {/* </div> */}
    {/* </div> */}
    </Progress>
    </ProgressContainer>
    </Container>
    <Button>
    <button id="prev" disabled>Prev</button>
    <button id="next">Next</button>
    </Button>
    {/* </div> */}
    </BodyStyle>
  );
};
