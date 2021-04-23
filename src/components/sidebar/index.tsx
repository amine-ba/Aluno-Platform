import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <Sider trigger={null} collapsible collapsed={true}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
