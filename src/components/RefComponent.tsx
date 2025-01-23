import React from "react";

interface RefComponentProps {
  content: string;
  isClickable?: boolean;
}

const RefComponent: React.FC<RefComponentProps> = ({ content, isClickable }) => {
  return (
    <div className={`refComponent ${isClickable ? "clickable" : ""}`}>
      {content}
    </div>
  );
};

export default RefComponent;
