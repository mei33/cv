import React from "react";

import "./PageTitle.css";

interface Props {
  children: NonNullable<React.ReactNode>;
}

export const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className="PageTitle">{children}</h1>
);
