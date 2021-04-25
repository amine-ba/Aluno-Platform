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
      <StyledCard>
      <Card style={{background:color,borderRadius:15}}>
      <Meta
        avatar={
          <Avatar src={icon}/>
        }
        title={subject}
        description={<React.Fragment>7am - 9am <br/> {concept}: {topic} <br/> Progress: {progress}%</React.Fragment>}
      />
      </Card>
      </StyledCard>
    </a>
  );
};
