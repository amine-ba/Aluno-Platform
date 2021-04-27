import { Layout, Menu,DatePicker, Space } from "antd";
import { RecommendedPath } from "@components/recommendedPath";
import { Sidebar } from "@components/sidebar";
import { ProgressBar } from "@components/progressBar";


import React, { useState } from "react";
import { StyledContent, StyledLayout,ParentSection,FontStyle} from "./styled";
import withRouter from "next/dist/client/with-router";

const { Header, Sider, Content } = Layout;


const Exercise = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <FontStyle>
    <Layout>
      <Sidebar/>
      <StyledContent>
        <ProgressBar></ProgressBar>
      </StyledContent>

    </Layout>
    </FontStyle>
  );
};

export default Exercise;
