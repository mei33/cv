import React from "react";

import { Contact as ContactSample } from "../../types";

import Code from "../../images/icons/code.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Mail from "../../images/icons/mail.svg";
import Pin from "../../images/icons/pin.svg";

import "./Contact.css";

interface Props extends ContactSample {}

export const Contact: React.FC<Props> = ({ href, icon, title }) => {
  const getIcon = () => {
    const commonProps = { className: "Contact__iconInner" };

    switch (icon) {
      case "code": {
        return <Code {...commonProps} />;
      }

      case "linkedin": {
        return <Linkedin {...commonProps} />;
      }

      case "mail": {
        return <Mail {...commonProps} />;
      }

      case "pin": {
        return <Pin {...commonProps} />;
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
