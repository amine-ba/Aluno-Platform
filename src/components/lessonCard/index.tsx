import React, {useState} from "react";
import {ImgBox,Wrapper2,Wrapper3} from "./styled";
import Button from "@material-ui/core/Button"
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player'
import {EyeOutlined,PlayCircleOutlined} from "@ant-design/icons";

const imgBoxVariants = {
  hidden:{
    x: 500,
    opacity: 0
  },
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      delay: 0.5, duration: 0.5
    }
  }
}

export const LessonCard = () => {
  const [toggle,setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false):setToggle(true);
  }

  const [switchButton, setSwitchButton] = useState('Play Video Tutorial')
  function handleClick() {
     if (switchButton === "Play Video Tutorial") {
        setSwitchButton("Read Flash Card")
     } else {
        setSwitchButton("Play Video Tutorial")
     }
   }

   const [switchIcon, setSwitchIcon] = useState(<EyeOutlined style={{paddingLeft:5,paddingRight:5,fontSize:20}}/>)
     function handleClick2() {
        if (switchIcon ===<EyeOutlined style={{paddingLeft:5,paddingRight:5,fontSize:20}}/>) {
           setSwitchIcon(<PlayCircleOutlined style={{paddingLeft:5,paddingRight:5,fontSize:20}}/>)
        } else {
           setSwitchIcon(<EyeOutlined style={{paddingLeft:5,paddingRight:5,fontSize:20}}/>)
        }
      }

   function allFun(){
     toggler();
     handleClick();
     handleClick2();
   }
 
  const [activeStep, setActiveStep] = React.useState(0)

  const nextStep = () => {
    if(activeStep < 5){
    setActiveStep((currentStep)=> currentStep + 1)
    }
  }

  const previousStep = () => {
    if(activeStep !== -1){
    setActiveStep((currentStep)=> currentStep - 1)
    }
  }

  return (
      <ImgBox>
      <Button style={{borderRadius: 20,fontFamily: "Poppins", backgroundColor:"#FF886B",marginTop:5,marginBottom: 20, display:"flex",float:"right", color:"#fff",fontSize:10,fontWeight:"bold",paddingRight:20}}  onClick={()=> allFun()}>{switchIcon} &nbsp; {switchButton}</Button>
      {toggle ? 
      <div>
          {
          <div>
          <h1 style={{fontSize:17,fontWeight:"600",color:"#fd7351"}}>Video Tutorial</h1>
          <motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer style={{borderRadius:10,overflow:"hidden"}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>
          </div>
     }
    </div>
    : <div>
      <h1 style={{fontSize:17, paddingBottom: 20, color:"#fd7351",fontWeight:"600"}}>Algebraic Manipulation </h1>
      <Wrapper3>
      <p>Lorem ipsum dolor sit amet <span style={{fontWeight:"bold"}}>consectetur</span> adipisicing elit. Quam quis cumque <span style={{fontWeight:"bold"}}>voluptas</span> illo aliquid.</p>
       <p>rem error quidem optio,Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <br></br>
      <h1 style={{fontWeight:"600",fontSize:17,color:"#fd7351",paddingBottom:10}}>Formula</h1>
      </Wrapper3>
      <Wrapper2>
      <p style={{paddingTop:5,paddingLeft:10}}>ax2 + bx + c = 0</p>   
      </Wrapper2>
      </div> 
} 
      </ImgBox>  
      
  );
};
