import React from "react";

import { Contact as ContactSample } from "../../types";

import Code from "../../images/icons/code.svg";
import Linkedin from "../../images/icons/linkedin.svg";
import Mail from "../../images/icons/mail.svg";
import Pin from "../../images/icons/pin.svg";

import "./Contact.css";

interface Props extends ContactSample {}

export const Contact: React.FC<Props> = ({ href, icon, title }) => (
  <div className="Contact">
    <div className="Contact__content">{getContent({ href, title })}</div>
    <div className="Contact__icon">{getIcon(icon)}</div>
  </div>
);

function getContent({
  href,
  title,
}: {
  title: Props["title"];
  href: Props["href"];
}) {
  const commonProps = { className: "Contact__text" };

  if (href) {
    return (
      <a {...commonProps} href={href} target="_blank">
        {title}
      </a>
    );
  }

  return <span {...commonProps}>{title}</span>;
}

function getIcon(icon: Props["icon"]) {
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
}
