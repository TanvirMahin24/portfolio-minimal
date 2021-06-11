import React from "react";
import { CertificateItem } from "./CertificateItem";
import { BorderedSection } from "../Shared/BorderedSection";
import data from "../../stub/Certificates/data";

const Certificates = () => {
  return (
    <BorderedSection title="CERTIFICATES">
      {data.map((item) => (
        <CertificateItem key={item.id} {...item} />
      ))}
    </BorderedSection>
  );
};

export default Certificates;
