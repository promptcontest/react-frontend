import React from 'react';

interface LabelProps {
  text: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {

  return (
    <div
      className={`bg-background-secondaryActive text-content-primarySub label-small-plus ml-2.5 flex h-5 items-center px-2.5 py-4 rounded-md ${className || ''}`}
    >
      {text}
    </div>
  );
}

export default Label;