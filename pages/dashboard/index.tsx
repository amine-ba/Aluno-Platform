import { Layout, Menu,DatePicker, Space } from "antd";
import { RecommendedPath } from "@components/recommendedPath";
import { Sidebar } from "@components/sidebar";
import { BadgeItem } from "@components/badge";
import { Timetable } from "@components/timetable";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BookOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { StyledContent, StyledLayout, StyledCalendarContent,StyledBadgeContent,ParentSection, SiteLayoutBackground,FontStyle} from "./styled";
import withRouter from "next/dist/client/with-router";

const { Header, Sider, Content } = Layout;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <FontStyle>
    <Layout>
      <Sidebar/>
      <StyledLayout>
        <SiteLayoutBackground/>
        <ParentSection>
        <StyledContent>
          {/* <h1 style={{paddingLeft:5}}>Today's Plan <BookOutlined style={{color: "#fff"}} /></h1> */}
        {/* <DatePicker style={{borderRadius:15, width:400}}onChange={onChange} /> */}
          <RecommendedPath /> 
        </StyledContent>
        <StyledBadgeContent>
        {/* <ParentSection> */}
          <BadgeItem 
          icon={"./logo.png"}
          title={"Average Score"}
          color={"#676ea8"}
          achievement={"84%"}
          />
          <BadgeItem 
          icon={"./logo.png"}
          title={"Medals Earned This Week"}
          color={"#f0592c"}
          achievement={"7"}
          />
          {/* </ParentSection> */}
        </StyledBadgeContent>
        </ParentSection>
        {/* <StyledCalendarContent><Timetable/></StyledCalendarContent> */}
      </StyledLayout>
    </Layout>
    </FontStyle>
  );
};

export default Dashboard;
