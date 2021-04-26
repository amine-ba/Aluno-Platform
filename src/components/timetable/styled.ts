import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  text-align: center;
  max-width: 71rem;

  h1 {
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2rem;
    padding-bottom: 0.75rem;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export const CalendarFormat = styled.div`
  .events {
  margin: 0;
  padding: 0;
  list-style: none;
}

.events .ant-badge-status {
  width: 100%;
  overflow: hidden;
  font-size: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.notes-month {
  font-size: 10px;
  text-align: center;
}
.notes-month section {
  font-size: 10px;
}
`;

export const CalendarCardFormat = styled.div`
  height:100%;
  width:100%;
  border: 2px solid green;
  border-radius:15px;
`;

