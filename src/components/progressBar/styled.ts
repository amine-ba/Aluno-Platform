import styled from "styled-components";
import { Skeleton, Switch, Card, Avatar } from "antd";

export const Center = styled.div`
  margin-top:5% !important;
  margin-left:40%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30%;
  margin-top:10px;
  margin-bottom:10px;
`;

export const ImgBox = styled.div`
  width: 500px;
  height: 350px;
`;

export const ImgBoxImg = styled.div`
  width: 100%;
  height: 100%;
`;

export const ParentSection = styled(Content)`
display: flex;
`;

// export const Circle = styled.div``;
// export const Details = styled.div``;
// export const SubjectText = styled.div``;
// export const Time = styled.div``;
// export const Progress = styled.div``;
