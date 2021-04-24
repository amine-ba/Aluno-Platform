import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { StyledCard} from "./styled";
const { Meta } = Card;

type sequenceItemProps = {
  icon: string;
  color: string;
  progress: number;
  subject: string;
  concept: string;
  topic: string;
};

export const SequenceItem = ({
  icon,
  color,
  progress,
  subject,
  concept,
  topic,
}: sequenceItemProps) => {
  return (
    <a href="#">
    <Card style={{ width: 300, marginTop: 16, borderRadius: 10, backgroundColor:color}}>
      <Meta
        avatar={
          <Avatar src={icon}/>
        }
        title={subject}
        style={{backgroundColor:color}}
        description={"7am - 9am" + "\n" + concept + ":" + topic}
      />
    </Card>
    </a>
  );
};
