import React, {useState} from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {Center, Wrapper,Content,ImgBox,ImgBoxImg,ParentSection,Center2} from "./styled";
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import {motion} from 'framer-motion';
import ReactPlayer from 'react-player'
import { LessonCard } from "@components/lessonCard";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
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

export const ProgressBar = () => {

  const [toggle,setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false):setToggle(true);
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

  if(activeStep === 0){
    return (
      <div>
        <Center2>
          <h1>Click Start to proceed</h1>
        </Center2>
        <Center>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={()=>nextStep()}
            >Start</Button> 
        </Center>  
      </div>
    );
  }
  else{
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
      <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel>Algebra</StepLabel>
        </Step>
      </Stepper>
      <Switch  checkedChildren="Video Tutorial" unCheckedChildren="Flash Card" style={{marginLeft:20, marginBottom:20,display:"flex"}} onClick={toggler}/>
      {toggle ? <div>
      <Wrapper>
        <Content>
    {activeStep === 1 &&<motion.div  variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />      
      </ImgBoxImg>
      </ImgBox>       
    </motion.div>}

    {activeStep === 2 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </ImgBoxImg>  
      </ImgBox>     
    </motion.div>}

    {activeStep === 3 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    {activeStep === 4 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    {activeStep === 5 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />      
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    {activeStep === 6 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />      
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    </Content>
    </Wrapper>
    </div>
      
    : <div>
    <Wrapper>
        <Content>
    {activeStep === 1&&<motion.div  variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>
    </motion.div>}

    {activeStep === 2 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>
    </motion.div>}

    {activeStep === 3 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>   
    </motion.div>}

    {activeStep === 4 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>          
    </motion.div>}

    {activeStep === 5 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>        
    </motion.div>}

    {activeStep === 6 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <LessonCard></LessonCard>         
    </motion.div>}

    </Content>
    </Wrapper>
    </div>
    }
      
    <Center>
      <Button
      className={classes.button}
      disabled={activeStep === 0}
      variant="outlined"
      color="primary"
      onClick={()=>previousStep()}
      >Previous</Button> 

      <Button
      className={classes.button}
      disabled={activeStep === 5}
      variant="outlined"
      color="primary"
      onClick={()=>nextStep()}
      >Next</Button> 
      </Center>   
    </div>
    
  );
};
}
