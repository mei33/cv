import React from "react";

import "./Layout.css";

interface Props {
  children: NonNullable<React.ReactNode>;
}

export const Layout: React.FC<Props> = ({ children }) => (
  <div className="Layout">{children}</div>
);
