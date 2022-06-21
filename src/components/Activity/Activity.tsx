import React from "react";

import { Activity as ActivitySample } from "../../types";
import { Columns } from "../";

import "./Activity.css";

interface Props extends ActivitySample {}

export const Activity: React.FC<Props> = ({
  company,
  description,
  href,
  period,
  position,
  skills,
}) => (
  <section className="Activity">
    <Columns
      left={
        <div className="Activity__aside">
          <a className="Activity__asideTitle" href={href} target="_blank">
            {company}
          </a>
          <p className="Activity__asideSubtitle">{period}</p>
        </div>
      }
      right={
        <>
          <h4 className="Activity__title">{position}</h4>
          {Boolean(skills.length) && (
            <ul className="Activity__list" aria-label="Skills">
              {skills.map((skill, index) => (
                <li className="Activity__listItem" key={index}>
                  {skill}
                </li>
              ))}
            </ul>
          )}
          <p className="Activity__description">{description}</p>
        </>
      }
    />
  </section>
);
