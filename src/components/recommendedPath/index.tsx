import React, { Component } from "react";
import { SequenceItem } from "@components";
import { StyledCard } from "./styled";
export const RecommendedPath: React.FC = () => {
  return (
    <div>
      <SequenceItem
        icon={"dssdvd"}
        progress={24}
        subject={"Mathematics"}
        color={"red"}
        concept={"Numerators"}
        topic={"Fractions"}
      />
      <SequenceItem
        icon={"fvfdvs"}
        progress={65}
        subject={"Mathematics"}
        color={"blue"}
        concept={"Numerators"}
        topic={"Decimals and Percentages"}
      />
      <SequenceItem
        icon={"dcdccd"}
        progress={21}
        subject={"Mathematics"}
        color={"green"}
        concept={"Geometry"}
        topic={"Properties of Angles"}
      />
      <SequenceItem
        icon={"cdvvdf"}
        progress={14}
        subject={"Mathematics"}
        color={"purple"}
        concept={"Algebra"}
        topic={"Algebraic Manipulation"}
      />
      <SequenceItem
        icon={"trntrg"}
        progress={90}
        subject={"Mathematics"}
        color={"yellow"}
        concept={"Algebra"}
        topic={"Sequences and Graphs"}
      />
    </div>
  );
};
