import styled from "styled-components";
import { Layout, Menu } from "antd";
const { Header, Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  background: #fff;
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  min-height: 280px;
  background-color: #fff;
`;
