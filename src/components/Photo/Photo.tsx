import React from "react";

import "./Photo.css";

interface Props {
  alt: string;
  src: string;
}

export const Photo: React.FC<Props> = ({ alt, src }) => (
  <img alt={alt} className="Photo" src={src} />
);
