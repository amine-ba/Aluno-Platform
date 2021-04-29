import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {Center, Wrapper,Content,ImgBox,ImgBoxImg} from "./styled";
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import {motion} from 'framer-motion';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(5),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

const slideImages = [
  'https://randomwordgenerator.com/picture.php',
  'https://randomwordgenerator.com/picture.php',
  'https://randomwordgenerator.com/picture.php'
];

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

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

export const ProgressBar = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0)

  const nextStep = () => {
    if(activeStep < 4){
    setActiveStep((currentStep)=> currentStep + 1)
    }
  }

  const previousStep = () => {
    if(activeStep !== -1){
    setActiveStep((currentStep)=> currentStep - 1)
    }
  }

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
      </Stepper>
      <Wrapper>
        <Content>

    {activeStep === 1&&<motion.div  variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <img src={"https://picsum.photos/800/500"}/> 
      </ImgBoxImg>
      </ImgBox>       
    </motion.div>}

    {activeStep === 2 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <img src={"https://picsum.photos/800/500"}/>  
      </ImgBoxImg>  
      </ImgBox>     
    </motion.div>}

    {activeStep === 3 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <img src={"https://picsum.photos/800/500"}/> 
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    {activeStep === 4 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <img src={"https://picsum.photos/800/500"}/> 
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    {activeStep === 5 &&<motion.div variants={imgBoxVariants}
    initial="hidden" animate="visible">
      <ImgBox>
      <ImgBoxImg>
      <img src={"https://picsum.photos/800/500"}/> 
      </ImgBoxImg>  
      </ImgBox>        
    </motion.div>}

    </Content>
    </Wrapper>
    <Center>
      <Button
      className={classes.button}
      disabled={activeStep === 4}
      variant="outlined"
      color="primary"
      onClick={()=>nextStep()}
      >Next</Button>
      <Button
      className={classes.button}
      disabled={activeStep === 0}
      variant="outlined"
      color="primary"
      onClick={()=>previousStep()}
      >Previous</Button>  
      </Center>   
    </div>
  );
};
