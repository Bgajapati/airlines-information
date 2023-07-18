import React from "react";
import "../../../scss/components/spinner.scss";

export const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="loading-text">Loading...</div>
      <div className="loading-spinner"></div>
    </div>
  );
};
