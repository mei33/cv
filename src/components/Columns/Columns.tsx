import React from "react";

import "./Columns.css";

interface Props {
  className?: string;
  left?: React.ReactNode;
  right: React.ReactNode;
}

export const Columns: React.FC<Props> = ({ className, left, right }) => (
  <div className={`Columns ${className ? className : ""}`}>
    <div className="Columns__column Columns__column--left">{left}</div>
    <div className="Columns__column Columns__column--right">{right}</div>
  </div>
);
