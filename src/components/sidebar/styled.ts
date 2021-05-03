import styled from "styled-components";
import 'antd/dist/antd.css';
export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background-image: url("./logo.png");
`;

export const Trigger = styled.div`
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
`;

export const TriggerHover = styled.div`
  color: #1890ff;
`;

export const ChangeColor = styled.div`
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
	background: transparent;
}
.ant-menu{
background-color: #fd7351;
}
`;
export const SitelayoutBackground = styled.div`

  background: #fff;
`;
