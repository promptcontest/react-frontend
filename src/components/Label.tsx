import React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {

  return (
    <div style={{"fontSize": "14px"}}
      className="bg-background-secondaryActive text-content-primarySub label-small-plus ml-2.5 flex h-5 items-center px-2.5 rounded-md"
    >
      {text}
    </div>
  );
}

export default Label;