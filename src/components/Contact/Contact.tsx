import React from "react";

import { Contact as ContactSample } from "../../types";

import "./Contact.css";

interface Props extends ContactSample {}

export const Contact: React.FC<Props> = ({ href, icon, title }) => {
  const getIcon = () => {
    switch (icon) {
      case "tag": {
        return "";
      }

      default: {
        return null;
      }
    }
  };

  const getContent = () => {
    if (href) {
      return (
        <a className="Contact__text" href={href} target="_blank">
          {title}
        </a>
      );
    }

    return <span className="Contact__text">{title}</span>;
  };

  return (
    <div className="Contact">
      <div className="Contact__content">{getContent()}</div>
      <div className="Contact__icon">{getIcon()}</div>
    </div>
  );
};
