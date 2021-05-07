import React, {useState, Component} from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {Center, Wrapper,Content,ImgBox,ImgBoxImg,ParentSection,Center2,ImgBox2,Wrapper2,Wrapper3} from "./styled";
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player'
import {EyeOutlined,PlayCircleOutlined} from "@ant-design/icons";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      fontFamily:"Poppins",
    },
    button: {
      marginRight: theme.spacing(5),
      width: 100,
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

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
{/* <PlayCircleOutlined /> */}
{/* <EyeOutlined /> */}
  function handleClick() {
     if (switchButton === "Play Video Tutorial") {
        setSwitchButton("Read Flash Card")
     } else {
        setSwitchButton("Play Video Tutorial")
     }
   }

   function allFun(){
     toggler();
     handleClick();
   }
 

  const classes = useStyles();
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
      <ImgBoxImg>
      {/* <Switch unCheckedChildren="Video Tutorial" checkedChildren="Flash Card" style={{backgroundColor:"#fd7351",marginLeft: 200, marginRight: 80, marginTop:5,marginBottom: 20, display:"flex",float:"right"}} onClick={toggler}/> */}
      <Button style={{borderRadius: 20,fontFamily: "Poppins", backgroundColor:"#FF886B",marginLeft: 200,marginTop:5,marginBottom: 20, display:"flex",float:"right", color:"#fff",fontSize:10,fontWeight:"bold",paddingRight:20}}  onClick={()=> allFun()}><PlayCircleOutlined style={{paddingLeft:5,paddingRight:5,fontSize:20}}/> &nbsp; {switchButton}</Button>
      {toggle ? <div>
          {
          <div>
          <h1 style={{fontSize:17,fontWeight:"bold",color:"#fd7351"}}>Video Tutorial</h1>
          <ImgBox2>
          <motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer style={{borderRadius:10,overflow:"hidden"}} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>
          </ImgBox2> 
          </div>
     }

          {/* {activeStep === 2 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>}

          {activeStep === 3 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>}

          {activeStep === 4 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>}

          {activeStep === 5 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>}

          {activeStep === 6 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </motion.div>} */}
    </div>
    : <div>
      <h1 style={{fontSize:17, paddingBottom: 20, color:"#fd7351",fontWeight:"600"}}>Algebraic Manipulation </h1>
      <Wrapper3>
      <p>Lorem ipsum dolor sit amet <span style={{fontWeight:"bold"}}>consectetur</span> adipisicing elit. Quam quis cumque <span style={{fontWeight:"bold"}}>voluptas</span> illo aliquid.</p>
      {/* <br></br> */}
       <p>rem error quidem optio,Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      {/* <br></br> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis cumque voluptas illo <span style={{fontWeight:"bold"}}>aliquid</span> rem error quidem optio,adipisicing elit. Quam quis cumque voluptas illo aliquid rem error quidem optio</p> */}
      <br></br>
      <h1 style={{fontWeight:"600",fontSize:17,color:"#fd7351",paddingBottom:10}}>Formula</h1>
      </Wrapper3>
      <Wrapper2>
      <p style={{paddingTop:5,paddingLeft:10}}>ax2 + bx + c = 0</p>   
      </Wrapper2>
      </div> 
} 
      </ImgBoxImg>
      </ImgBox>  
      
  );
};
