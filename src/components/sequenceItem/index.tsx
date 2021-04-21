import React from "react";

type sequenceItemProps = {
  icon : string;
  color: string;
  progress: number;
  subject: string;
  concept: string;
  topic: string;
}

export const SequenceItem = ({icon,color,progress,subject,concept,topic}:sequenceItemProps) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="../styles.css"></link>
    <div className="font-newfont pb-3 ml-60 w-64">  
  <div className={"bg-" + color + "-400 rounded lg:rounded-b-r lg:rounded-r p-4 flex flex-col"}>
  <img className="rounded mt-3 w-10 h-2/5 " src="https://cdn.iconscout.com/icon/free/png-256/math-1963506-1657007.png" ></img>
    <div className="absolute ml-5 mb-10">
      <div className="pl-10 text-black font-bold text-l">{subject}</div>
      <p className="pl-10 text-grey-darker">{concept}</p>
    </div>
    <div className="flex items-center">
      <div className="pl-10 ml-5 text-sm">
        <p className="text-black mb-3">{topic}</p>
        <p className="text-grey-dark">Completion: {progress}%</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};
