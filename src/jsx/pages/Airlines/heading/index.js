import React from "react";

export const AirlinesHeading = ({
  handleSearchAirline,
  handleAddAirline,
  handleLogin,
}) => {
  return (
    <div className="airlines-information__main-container-heading-container">
      <div className="airlines-information__main-container-heading">
        Airlines List
      </div>
      <div className="airlines-information__main-container-search-box">
        <label className="airlines-information__main-container-search-box-label">
          Search:
        </label>
        <div className="airlines-information__main-container-search-box-input">
          <input
            className="airlines-information__main-container-search-box-input-field"
            type="text"
            placeholder="Flight name"
            onChange={handleSearchAirline}
          />
        </div>
      </div>
      <div className="airlines-information__main-container-add-airline">
        <button
          className="airlines-information__main-container-add-airline-button"
          onClick={handleAddAirline}
        >
          Add Airline
        </button>
      </div>
      <div className="airlines-information__main-container-account">
        <button
          className="airlines-information__main-container-account-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
