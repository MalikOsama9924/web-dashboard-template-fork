import React from "react";

type ErrorMsgProps = {
  message: string;
  description?: string;
};

const ErrorMsg: React.FC<ErrorMsgProps> = ({ message, description }) => {
  if (!message) return null;

  return (
    <div
      className="text-red-500 font-medium p-4 border-l-4 border-red-500 bg-red-50"
      role="alert"
    >
      <p className="text-red-500 font-medium">{message}</p>
      {description && (
        <p className="text-red-500 font-light text-sm">{description}</p>
      )}
    </div>
  );
};

export default ErrorMsg;
