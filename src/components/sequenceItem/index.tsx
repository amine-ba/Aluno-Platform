import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
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
    <Card style={{ width: 300, marginTop: 16, borderRadius: 10 }}>
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={subject}
        description={"7am - 9am "}
      />
    </Card>
  );
};
