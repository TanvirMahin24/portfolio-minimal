import React from "react";
import { BorderedSection } from "../Shared/BorderedSection";
import data from "../../stub/Experience/data";
import { ExperienceItem } from "./ExperienceItem";

const Education = () => {
  return (
    <BorderedSection title="EXPERIENCE">
      {data.map((exp) => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </BorderedSection>
  );
};

export default Education;
