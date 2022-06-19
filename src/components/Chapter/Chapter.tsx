import React from "react";

import { Columns } from "../";

import "./Chapter.css";

export interface Chapter {
  children: React.ReactNode;
  title: string;
}

interface Props extends Chapter {}

export const Chapter: React.FC<Props> = ({ children, title }) => (
  <section className="Chapter">
    <Columns
      className="Chapter__columns"
      left={<h3 className="Chapter__title">{title}</h3>}
      right={<div className="Chapter__fill" />}
    />
    {children && <section>{children}</section>}
  </section>
);
