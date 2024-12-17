import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4 text-center">
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
