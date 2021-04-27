import styled from "styled-components";
export const StyledCard = styled.div`
  /* border-radius: 5px;
  height: 50px;
  width: 90px;
  background-color: "black";
  padding: 10 px; */
  width:400px;
  margin-top:16px;
`;


export const BodyStyle = styled.div`
  /* border-radius: 5px;
  height: 50px;
  width: 90px;
  background-color: "black";
  padding: 10 px; */
  box-sizing:border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin-top:16px;
`;

export const Container = styled.div`
  text-align:center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width:350px;
  
  ::before {
    content: "";
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
    transition: 0.4s ease;
  }
`;

export const Progress = styled.div`
  background-color: #fd7351;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
`;

export const Circle = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  position: absolute;
  height: 50px;
  width: 50px;
  border: 2px solid #b2bec3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease;
  :active{
    border-color:#fd7351;
  }
`;

export const Button = styled.button`
  background-color: #fd7351;
  color: #fff;
  border-radius: 15px;
  border: 0;
  cursor: pointer;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
  :focus{
    outline: 0;
  }
  :active{
    transform: scale(0.97);
  }
  :disabled{
    background-color: #fff;
    cursor: not-allowed;
  }
`;

