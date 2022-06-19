import React from "react";

import "./PageSubtitle.css";

interface Props {
  children: NonNullable<React.ReactNode>;
}

export const PageSubtitle: React.FC<Props> = ({ children }) => (
  <h2 className="PageSubtitle">{children}</h2>
);
