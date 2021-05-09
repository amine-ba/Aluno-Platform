import styled from "styled-components";
import { Layout, Menu} from "antd";
const { Header, Sider, Content} = Layout;

export const FontStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  font-family:Nunito,sans-serif!important;
`;

export const FontStyle2 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
  font-family:"Poppins",sans-serif!important;
`;

export const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  min-height: 500px;
  background: #fff;
  border-radius:15px;
  padding-left:100px;
`;
