import React from "react";
import { CertificateItem } from "./CertificateItem";
import data from "../../stub/Certificates/data";

const Certificates = () => {
  return (
    <div>
      {data.map((item) => (
        <CertificateItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Certificates;
