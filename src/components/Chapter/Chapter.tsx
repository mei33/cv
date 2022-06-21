import React from "react";

import { Chapter as ChapterSample } from "../../types";

import Briefcase from "../../images/icons/briefcase.svg";
import Education from "../../images/icons/education.svg";

import { Columns } from "../";

import "./Chapter.css";

interface Props extends ChapterSample {
  children: React.ReactNode;
}

export const Chapter: React.FC<Props> = ({ children, icon, title }) => (
  <section className="Chapter">
    <Columns
      className="Chapter__columns"
      left={
        <div className="Chapter__left">
          {icon && (
            <div className="Chapter__icon" role="presentation">
              {getIcon(icon)}
            </div>
          )}
          <h3 className="Chapter__title">{title}</h3>
        </div>
      }
      right={<div className="Chapter__fill" />}
    />
    {children && <section>{children}</section>}
  </section>
);

function getIcon(icon: NonNullable<Props["icon"]>) {
  const commonProps = { className: "Chapter__iconInner" };

  switch (icon) {
    case "briefcase": {
      return <Briefcase {...commonProps} />;
    }

    case "education": {
      return <Education {...commonProps} />;
    }
  }
}
