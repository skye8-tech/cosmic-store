import React from "react";

const ErrorComponent = ({ errors, ...props }) => {
  return (
    <div {...props}>
      {Object.entries(errors).map((keys, index) => (
        <div key={index}>
          {keys.map((key, i) => (
            <div key={i}>
              {!Array.isArray(key) ? (
                <strong>{key}</strong>
              ) : (
                <ul>
                  {key.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ErrorComponent;
