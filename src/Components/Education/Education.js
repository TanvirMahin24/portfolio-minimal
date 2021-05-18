import React from "react";
import { BorderedSection } from "../Shared/BorderedSection";
import data from "../../stub/Education/data";
import EducationItem from "./EducationItem/EducationItem";

const Education = () => {
  return (
    <BorderedSection title="EDUCATION">
      {data.map((edu) => (
        <EducationItem key={edu.id} {...edu} />
      ))}
    </BorderedSection>
  );
};

export default Education;
