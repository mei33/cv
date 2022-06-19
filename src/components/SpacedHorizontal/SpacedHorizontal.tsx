import React from "react";

import "./SpacedHorizontal.css";

interface Props {
  children: NonNullable<React.ReactNode>;
}

export const SpacedHorizontal: React.FC<Props> = ({ children }) => {
  return <div className="SpacedHorizontal">{children}</div>;
};
