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

export const LessonCard = () => {

  return (
      <ImgBox>
      <ImgBoxImg>
      <h1 style={{color:"#fd7351"}}>Description</h1>
      <p>Lorem ipsum dolor sit amet <span style={{fontWeight:"bold"}}>consectetur</span> adipisicing elit. Quam quis cumque <span style={{fontWeight:"bold"}}>voluptas</span> illo aliquid rem error quidem optio,</p>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis cumque voluptas illo <span style={{fontWeight:"bold"}}>aliquid</span> rem error quidem optio,adipisicing elit. Quam quis cumque voluptas illo aliquid rem error quidem optio</p>
      <br></br>
      <h1 style={{color:"#fd7351"}}>Formula</h1>
      <p>ax2 + bx + c = 0</p>      
      </ImgBoxImg>
      </ImgBox>           
  );
};
