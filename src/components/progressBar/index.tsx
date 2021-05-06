import React, {useState} from "react";
import { Switch } from "antd";
import {RightCircleOutlined,LeftCircleOutlined,CaretLeftOutlined} from "@ant-design/icons";
import {Center, Wrapper,Content,Center2} from "./styled";
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import {motion} from 'framer-motion';
import { LessonCard } from "@components/lessonCard";
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';
import { VideoCard } from "@components/videoCard";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      paddingTop:"50px",
    },
    button: {
      marginRight: theme.spacing(5),
      width: 100,
      color: '#fd7351',
      border: 0,
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);
const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#fd7351',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#fd7351',
    zIndex: 1,
    fontSize: 25,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#fd7351',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#fd7351',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 4,
    borderRadius: 1,
  },
})(StepConnector);

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


function getSteps() {
  return ['','', '','','',''];
}

export const ProgressBar = () => {

  const steps = getSteps();
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
            variant="text"
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
      <h1 className="header"><Button href={'./dashboard'} type="link"><LeftCircleOutlined style={{fontSize:"25px",color: '#fd7351'}}/></Button> <span style={{fontWeight:"bold"}}>Algebra</span> </h1>
      <Stepper style={{width:850}} connector={<QontoConnector />} activeStep={activeStep}>
      {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <Switch checkedChildren="Video Tutorial" unCheckedChildren="Flash Card" style={{backgroundColor:"#fd7351", marginLeft:20, marginBottom:20,display:"flex",float:"left"}} onClick={toggler}/>
      {toggle ? <div>
      <Wrapper>
        <Content>
          {activeStep === 1 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>     
          </motion.div>}

          {activeStep === 2 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>     
          </motion.div>}

          {activeStep === 3 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>      
          </motion.div>}

          {activeStep === 4 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>      
          </motion.div>}

          {activeStep === 5 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>      
          </motion.div>}

          {activeStep === 6 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <VideoCard></VideoCard>
          </motion.div>}
      </Content>
    </Wrapper>
    </div>
    : <div> */}
    <Wrapper>
        <Content>
          {activeStep === 1 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>
          </motion.div>}

          {activeStep === 2 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>
          </motion.div>}

          {activeStep === 3 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>   
          </motion.div>}

          {activeStep === 4 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>          
          </motion.div>}

          {activeStep === 5 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>        
          </motion.div>}

          {activeStep === 6 &&<motion.div variants={imgBoxVariants} initial="hidden" animate="visible">
            <LessonCard></LessonCard>         
          </motion.div>}
      </Content>
    </Wrapper>
    {/* </div>
    }  */}
    <Center>
      <Button
      className={classes.button}
      disabled={activeStep === 0}
      variant="text"
      color="primary"
      onClick={()=>previousStep()}
      ><LeftCircleOutlined style={{fontSize:20}}/>&nbsp;Previous 
      </Button> 

      <Button
      className={classes.button}
      disabled={activeStep === 5}
      variant="text"
      color="primary"
      onClick={()=>nextStep()}
      >Next &nbsp; <RightCircleOutlined style={{fontSize:20}}/></Button> 
    </Center>   

      <style jsx>{`
        .header {
          font-size: 25px;
        }
      `}</style>
    </div>    
    );
  };
}
