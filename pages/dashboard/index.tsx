import { Layout, Menu } from "antd";
import { RecommendedPath } from "@components/recommendedPath";
import { Sidebar } from "@components/sidebar";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { StyledLayout, StyledContent } from "./styled";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar />
      <StyledLayout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={() => toggle} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={() => toggle} />
          )}
        </Header>
        <StyledContent>
          <RecommendedPath />
        </StyledContent>
      </StyledLayout>
    </Layout>
  );
};

export default Dashboard;
