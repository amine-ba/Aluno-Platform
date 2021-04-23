import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Header, Sider, Content } = Layout;
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
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
        {collapsed ? (
          <MenuUnfoldOutlined className="trigger" onClick={toggle} />
        ) : (
          <MenuFoldOutlined className="trigger" onClick={toggle} />
        )}
      </Menu>
    </Sider>
  );
};
