import React from "react";
import { Skeleton, Switch, Card, Avatar } from "antd";
import { StyledCard} from "./styled";
const { Meta } = Card;
type badgeProps = {
  achievement: string;
  icon: string;
  title: string;
  color: string;
};

export const BadgeItem = ({
  achievement,
  icon,
  title,
  color,
}: badgeProps) => {
  return (
    <a href="#">
      <StyledCard>
      <Card style={{background:color,borderRadius:30}}>
      <Meta 
        avatar={
          <Avatar src={icon}/>
        }
        title={title}
        description={achievement}
      />
      </Card>
      </StyledCard>
    </a>
  );
};
