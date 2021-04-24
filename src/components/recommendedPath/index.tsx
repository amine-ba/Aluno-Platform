import React, { Component } from "react";
import { SequenceItem } from "@components";
export const RecommendedPath: React.FC = () => {
  return (
    <div>
      <SequenceItem
        icon={"dfddfbg"}
        progress={24}
        subject={"Mathematics"}
        color={"#e9eaf4"}
        concept={"Numerators"}
        topic={"Fractions"}
      />
      <SequenceItem
        icon={"fvfdvs"}
        progress={65}
        subject={"Mathematics"}
        color={"#ebfafe"}
        concept={"Numerators"}
        topic={"Decimals and Percentages"}
      />
      <SequenceItem
        icon={"dcdccd"}
        progress={21}
        subject={"Mathematics"}
        color={"#ffeeea"}
        concept={"Geometry"}
        topic={"Properties of Angles"}
      />
      <SequenceItem
        icon={"cdvvdf"}
        progress={14}
        subject={"Mathematics"}
        color={"#cdf2e0"}
        concept={"Algebra"}
        topic={"Algebraic Manipulation"}
      />
      <SequenceItem
        icon={"trntrg"}
        progress={90}
        subject={"Mathematics"}
        color={"#fff9ec"}
        concept={"Algebra"}
        topic={"Sequences and Graphs"}
      />
    </div>
  );
};
