import React, {useState} from "react";
import { Switch } from "antd";
import {RightCircleOutlined,LeftCircleOutlined,CaretLeftOutlined,SearchOutlined,BellOutlined,UserOutlined} from "@ant-design/icons";
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
import { FiArrowRightCircle,FiArrowLeftCircle } from 'react-icons/fi';
import { RiArrowLeftCircleFill,RiArrowRightCircleFill } from 'react-icons/ri';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop:"20px",
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
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#fd7351',
    zIndex: 1,
    fontSize: 20,
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
    borderTopWidth: 3,
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
      <h1 className="header"><Button href={'./dashboard'} type="link"><FiArrowLeftCircle style={{color:"#FF886B", marginRight: 10,fontSize:25}}/></Button> <span style={{fontWeight:"600"}}>Algebra</span>
      <Button style= {{ borderRadius: 10,fontSize:"20px",backgroundColor: '#ffdfd7',color:"#fe7755",display:"flex",float:"right",marginRight:65}}href={'./dashboard'} type="link"> <UserOutlined/></Button><Button style= {{ borderRadius: 10,backgroundColor:"#ffeeea", fontSize:"20px",color: '#fd7c5b',display:"flex",float:"right", marginLeft:20,marginRight:20}}href={'./dashboard'} type="link"><BellOutlined /></Button><Button style= {{ borderRadius: 10,fontSize:"20px",backgroundColor: '#e9eaf4',color:"#545da5",display:"flex",float:"right"}}href={'./dashboard'} type="link"><SearchOutlined /></Button></h1>
      <Stepper style={{width:1030}} connector={<QontoConnector />} activeStep={activeStep}>
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
      // className={classes.button}
      style={{fontSize: 20,fontFamily:"Poppins", width:100,color:"gray",border:0,marginRight:20,textTransform:"capitalize",fontWeight:"500"}}
      disabled={activeStep === 0}
      variant="text"
      // color="gray"
      onClick={()=>previousStep()}
      ><FiArrowLeftCircle style={{color:"gray", marginRight: 10,fontSize:30}}/>&nbsp;Prev 
      </Button> 

      <Button
      className={classes.button}
      disabled={activeStep === 5}
      variant="text"
      style={{fontSize: 20,fontFamily:"Poppins",textTransform:"capitalize",fontWeight:"500"}}
      color="primary"
      onClick={()=>nextStep()}
      >Next<FiArrowRightCircle className="invertColors" style={{marginLeft: 15,fontSize:30}}/></Button> 
    </Center>   

      <style jsx>{`
        .header {
          font-size: 20px;
          color:#111847;
        }
        .invertColors {
          filter: invert(100%)!important;
        }
      `}</style>
    </div>    
    );
  };
}
