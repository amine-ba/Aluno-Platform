import { Layout, Menu, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Logo, Trigger, ChangeColor, FontStyle2, Container } from "./styled";
import { CgProfile } from "react-icons/cg";
import { VscDashboard } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";

const { Header, Sider, Content } = Layout;
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <FontStyle2>
      <Sider
        style={{ background: "#f8f9fe", overflow:"hidden"}}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Avatar
          size={40}
          style={{
            backgroundColor: "#f8f9fe",
            float: "left",
            marginLeft: 25,
            marginTop: 50,
            marginBottom: 50,
          }}
          src="./logo.png"
        ></Avatar>
        <Menu
          style={{ background: "#f8f9fe" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          {/* <Container> */}
          <Menu.Item
            key="1"
            icon={
              <VscDashboard
                style={{ color: "#fd7351", fontSize: 20, marginTop: 12 }}
              />
            }
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<CgProfile style={{ color: "#b5b8c9", fontSize: 20 }} />}
          >
            Profile
          </Menu.Item>
          {/* </Container> */}
          {/* <Menu.Item key="3" icon={<UploadOutlined />}>
          Profile
        </Menu.Item> */}
          {collapsed ? (
            <Trigger style={{ background: "#f8f9fe" }}>
              <MenuUnfoldOutlined onClick={toggle} />
            </Trigger>
          ) : (
            <Trigger>
              <MenuFoldOutlined onClick={toggle} />
            </Trigger>
          )}
        </Menu>
      </Sider>
    </FontStyle2>
  );
};
