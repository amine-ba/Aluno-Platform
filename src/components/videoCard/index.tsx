import React, {useState} from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {Center, Wrapper,Content,ImgBox,ImgBoxImg,ParentSection,Center2} from "./styled";
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
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

export const VideoCard = () => {

  return (
    <ImgBox>
    <ImgBoxImg>
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </ImgBoxImg>  
    </ImgBox>           
  );
};
