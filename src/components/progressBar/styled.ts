import styled from "styled-components";

export const Center = styled.div`
  margin-top:3%;
  margin-left:30%;
`;

export const OpeningFormat = styled.div`
  margin-top:20%;
  margin-bottom: 5%;
  margin-left:34%;
`;

export const Wrapper = styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  border: 1px solid #DDE2FC;
  border-radius: 10px;
  background-color: #f8f9fe;
  margin-left:4%;
`;

export const Content = styled.div`
  width: ${props => props.Width};
  height: ${props => props.Height};
  /* margin-left:15%; */
  margin-right:25%;
  margin-top:10px;
  margin-bottom:50px;
  color:#111847;
`;

