import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import {Logo,Trigger,ChangeColor} from "./styled";


const { Header, Sider, Content } = Layout;
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo/>
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
          <Trigger>
          <MenuUnfoldOutlined onClick={toggle} />
          </Trigger>
        ) : (
          <Trigger>
          <MenuFoldOutlined onClick={toggle} />
          </Trigger>
        )}
      </Menu>
      </Sider>
  );
};
