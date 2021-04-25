import React, { Component } from "react";
import { SequenceItem } from "@components";
import { ScrollInside} from "./styled";

export const RecommendedPath: React.FC = () => {
  return (
    <div>
      <ScrollInside>
      <SequenceItem
        icon={"./logo.png"}
        progress={24}
        subject={"Mathematics"}
        color={"#e9eaf4"}
        concept={"Numerators"}
        topic={"Fractions"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={65}
        subject={"Mathematics"}
        color={"#a1cdda"}
        concept={"Numerators"}
        topic={"Decimals and Percentages"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={21}
        subject={"Mathematics"}
        color={"#f0bcb0"}
        concept={"Geometry"}
        topic={"Properties of Angles"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={14}
        subject={"Mathematics"}
        color={"#9cd8bb"}
        concept={"Algebra"}
        topic={"Algebraic Manipulation"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={90}
        subject={"Mathematics"}
        color={"#dfc180"}
        concept={"Algebra"}
        topic={"Sequences and Graphs"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={24}
        subject={"Mathematics"}
        color={"#a5a8ce"}
        concept={"Numerators"}
        topic={"Fractions"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={65}
        subject={"Mathematics"}
        color={"#9adaec"}
        concept={"Numerators"}
        topic={"Decimals and Percentages"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={21}
        subject={"Mathematics"}
        color={"#ddafa5"}
        concept={"Geometry"}
        topic={"Properties of Angles"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={14}
        subject={"Mathematics"}
        color={"#b7e09c"}
        concept={"Algebra"}
        topic={"Algebraic Manipulation"}
      />
      <SequenceItem
        icon={"./logo.png"}
        progress={90}
        subject={"Mathematics"}
        color={"#d3a47f"}
        concept={"Algebra"}
        topic={"Sequences and Graphs"}
      />
      </ScrollInside>
    </div>
  );
};
