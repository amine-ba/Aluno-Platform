import React from "react";
import { Calendar, Badge,Typography } from 'antd';
import { CalendarFormat,CalendarCardFormat} from "./styled";

// function getListData(value) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//       ];
//       break;
//     case 10:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ];
//       break;
//     case 15:
//       listData = [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'success', content: 'This is very long usual event。。....' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {listData.map(item => (
//         <li key={item.content}>
//           <Badge status={item.type} text={item.content} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }
function onPanelChange(value, mode) {
  console.log(value, mode);
}
export const Timetable: React.FC = () => {
  return (
    <div>
      <CalendarCardFormat>
      <Typography.Title style={{paddingLeft: 8}} level={5}>Homework and Assignments</Typography.Title>
      {/* <Calendar fullscreen={false} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/> */}
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </CalendarCardFormat>
      </div>
  );
};
