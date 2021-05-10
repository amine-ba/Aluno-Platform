import React, { useState, useEffect } from "react";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import { Center, Wrapper, Content, OpeningFormat } from "./styled";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { LessonCard } from "@components/lessonCard";
import StepConnector from "@material-ui/core/StepConnector";
import PropTypes from "prop-types";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import { FiArrowLeftCircle } from "react-icons/fi";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Height } from "@material-ui/icons";
import { Dimensions } from 'react-native';

const imgBoxVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: "20px",
    },
    button: {
      marginRight: theme.spacing(1),
      width: 130,
      color: "#fd7351",
      border: 0,
      fontSize: 20,
      fontFamily: "Poppins",
      textTransform: "capitalize",
      fontWeight: "500",
    },
    button2: {
      width: 130,
      fontSize: 20,
      fontFamily: "Poppins",
      color: "#747aa1",
      border: 0,
      textTransform: "capitalize",
      fontWeight: "500",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);
const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#fd7351",
    // width: 15,
    // height: 15,
    // borderRadius: '50%',
    // borderColor:'#fd7351',
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#fd7351",
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
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const QontoConnector = withStyles({
  root: {},
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#fd7351",
    },
  },
  horizontal: {
    // marginLeft: 1,
  },
  completed: {
    "& $line": {
      borderColor: "#fd7351",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    width: "130%",
  },
  // lineHorizontal: {

  // },
})(StepConnector);

function getSteps() {
  return ["", "", "", "", "", ""];
}

export const ProgressBar = () => {
  const steps = getSteps();
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => {
    if (activeStep < 5) {
      setActiveStep((currentStep) => currentStep + 1);
    }
  };

  const previousStep = () => {
    if (activeStep !== -1) {
      setActiveStep((currentStep) => currentStep - 1);
    }
  };

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  };
  const { height, width } = useWindowDimensions();
  
  if (activeStep === 0) {
    return (
      <div>
        <OpeningFormat>
          <h1>Click Start to proceed</h1>
        </OpeningFormat>
        <Center>
          <Button
            className={classes.button}
            variant="text"
            color="primary"
            onClick={() => nextStep()}
          >
            Start
          </Button>
        </Center>
      </div>
    );
  } else {
    return (
      <div style={{ height: height, width: width }}>
        <div className={classes.root}>
          <h1 className="header">
            <Button href={"./dashboard"} type="link">
              <FiArrowLeftCircle
                style={{ color: "#FF886B", marginRight: 10, fontSize: 25 }}
              />
            </Button>{" "}
            <span style={{ color: "#111847", fontWeight: "600" }}>Algebra</span>
            <a
              style={{
                padding: 10,
                borderRadius: 9,
                fontSize: "20px",
                backgroundColor: "#ffdfd7",
                color: "#fe7755",
                display: "flex",
                float: "right",
                marginRight: 300,
              }}
              href="./dashboard"
            >
              {" "}
              <UserOutlined />
            </a>
            <a
              style={{
                padding: 10,
                borderRadius: 9,
                backgroundColor: "#ffeeea",
                fontSize: "20px",
                color: "#fd7c5b",
                display: "flex",
                float: "right",
                marginLeft: 20,
                marginRight: 20,
              }}
              href="./dashboard"
            >
              <BellOutlined />
            </a>
            <a
              style={{
                padding: 10,
                borderRadius: 9,
                fontSize: "20px",
                backgroundColor: "#e9eaf4",
                color: "#545da5",
                display: "flex",
                float: "right",
              }}
              href="./dashboard"
            >
              <SearchOutlined />
            </a>
          </h1>
          <Stepper
            style={{ width: "73%" }}
            connector={<QontoConnector />}
            activeStep={activeStep}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Wrapper>
            <Content>
              {activeStep === 1 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}

              {activeStep === 3 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}

              {activeStep === 4 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}

              {activeStep === 5 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}

              {activeStep === 6 && (
                <motion.div
                  variants={imgBoxVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <LessonCard></LessonCard>
                </motion.div>
              )}
            </Content>
          </Wrapper>
          <Center>
            <Button
              className={classes.button2}
              disabled={activeStep === 0}
              variant="text"
              onClick={() => previousStep()}
            >
              <FiArrowLeftCircle
                style={{ color: "#d4d6e4", marginRight: 10, fontSize: "40px" }}
              />
              &nbsp;Prev
            </Button>

            <Button
              className={classes.button}
              disabled={activeStep === 5}
              variant="text"
              color="primary"
              onClick={() => nextStep()}
            >
              Next
              <IoArrowForwardCircle
                className="invertColors"
                style={{ marginLeft: 15, fontSize: "40px" }}
              />
            </Button>
          </Center>
          <style jsx>{`
            .header {
              font-size: 20px;
              color: #fd5e36;
            }
          `}</style>
        </div>
      </div>
    );
  }
};
