import styled from "styled-components";
import { Layout, Menu} from "antd";
const { Header, Sider, Content} = Layout;

export const FontStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  font-family:Nunito,sans-serif!important;
`;
export const StyledLayout = styled(Layout)`
  background: #f8f9fe;
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  min-height: 400px;
  background-color: #fd5e36;
  border-radius:15px;
  width: 60%;
`;

export const StyledBadgeContent = styled(Content)`
  margin: 16px;
  /* min-height: 280px; */
  height: 31%;  
  background-color: #2c3790;
  border-radius:15px;
  width:50%;
`;
export const StyledCalendarContent = styled(Content)`
  display: flex;
  margin-left: 56%;
  margin-top:-40%;
  min-height: 280px;
  background-color: #42ae79;
  border-radius:15px;
  /* height:21.4rem; */
  height:22.2rem;
  width:42.5%;
`;

export const ParentSection = styled(Content)`
display: flex;
`;

export const SiteLayoutBackground = styled(Header)`
padding: 0;
`;
