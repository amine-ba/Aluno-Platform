import styled from "styled-components";
import { Layout, Menu } from "antd";
const { Header, Sider, Content} = Layout;

export const StyledLayout = styled(Layout)`
  background: #f8f9fe;
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  min-height: 400px;
  background-color: #fd5e36;
  width: 60%;
`;

export const StyledBadgeContent = styled(Content)`
  margin: 16px;
  /* min-height: 280px; */
  height: 31%;  
  background-color: #2c3790;
  width:50%;
`;
export const StyledCalendarContent = styled(Content)`
  display: flex;
  margin-left: 56%;
  margin-top:-38%;
  min-height: 280px;
  background-color: #42ae79;
  /* height:21.4rem; */
  height:22.2rem;
  width:42.5%;
`;

export const ParentSection = styled(Content)`
display: flex;
`;
