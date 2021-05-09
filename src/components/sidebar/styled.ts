import styled from "styled-components";
import 'antd/dist/antd.css';
export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background-image: url("./logo.png");
`;
export const FontStyle2 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  font-family:"Poppins",sans-serif!important;
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
.ant-menu:not(.ant-menu-vertical) .ant-menu-item-selected {
	background: transparent!important;
  //#001529 
}
.ant-menu{
  background-color: #f8f9fe!important;
}
`;
export const SitelayoutBackground = styled.div`
  background: #fff;
`;

export const Container = styled.div`
  &:hover {
      background-color: #fd7351;
  }
  /* &:active {
      background-color: #fd7351;
    } */
`;