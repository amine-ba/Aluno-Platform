import { Layout } from "antd";
import { Sidebar } from "@components/sidebar";
import { ProgressBar } from "@components/progressBar";
import React from "react";
import { StyledContent, FontStyle2 } from "./styled";

const { Header, Sider, Content } = Layout;

const Exercise = () => {
  return (
    <FontStyle2>
      <Layout>
        <Sidebar />
        <StyledContent>
          <ProgressBar></ProgressBar>
        </StyledContent>
      </Layout>
    </FontStyle2>
  );
};

export default Exercise;
