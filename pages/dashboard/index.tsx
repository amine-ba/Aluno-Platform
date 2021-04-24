import { Layout, Menu } from "antd";
import { RecommendedPath } from "@components/recommendedPath";
import { Sidebar } from "@components/sidebar";
import { Timetable } from "@components/timetable";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { StyledContent, StyledLayout, StyledCalendarContent,StyledBadgeContent,ParentSection} from "./styled";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar/>
      <StyledLayout>
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
        ></Header>
        <ParentSection>
        <StyledContent>
          <RecommendedPath /> 
        </StyledContent>
        <StyledBadgeContent></StyledBadgeContent>
        </ParentSection>
        <StyledCalendarContent><Timetable/></StyledCalendarContent>
      </StyledLayout>
    </Layout>
  );
};

export default Dashboard;
