import "../../../scss/pages/airlines.scss";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { AirlineDetailModal } from "../../components/modals/AirlineDetailModal";
import { List } from "../../components/list";
import { LoadingSpinner } from "../../components/LoadingSpinner";

// Action
import {
  getAirline,
  getAirlinesList,
} from "../../../services/airlines/actions";

export const Airlines = () => {
  // Hooks
  const dispatch = useDispatch();

  // Hooks - useState
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);

  // Hooks - Selector
  const {
    airlinesLoading,
    airlines,
    airlinesErrors,
    airlineLoading,
    airline,
    airlineErrors,
  } = useSelector((state) => state.airlines);

  const airlinesList = useMemo(() => {
    return airlines.filter((airline) => airline.name.includes(searchQuery));
  }, [searchQuery]);

  const finalList = searchQuery ? airlinesList : airlines;

  useEffect(() => {
    dispatch(getAirlinesList());
  }, []);

  const handleListClick = (id) => {
    const payload = { id };
    setIsCreateModal(false);
    dispatch(getAirline(payload));
    setTimeout(() => {
      setIsOpen(true);
    }, 500);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSearchAirline = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddAirline = () => {
    setIsCreateModal(true);
    setIsOpen(true);
  };

  return (
    <>
      <main className="airlines-information__main">
        <div className="airlines-information__main-container">
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
                  disabled={airlinesLoading}
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
          </div>

          <div className="airlines-information__main-container-lists">
            {airlinesLoading === true && <LoadingSpinner />}
            {airlinesLoading === false &&
              finalList?.map((airline, i) =>
                airline?.id && i <= 500 ? (
                  <List
                    airline={airline}
                    onclick={handleListClick}
                    key={airline.id}
                  />
                ) : null,
              )}
          </div>
        </div>
      </main>
      <AirlineDetailModal
        isOpen={isOpen}
        onClose={handleClose}
        airlineData={isCreateModal ? {} : airline}
        isLoading={airlineLoading}
        isCreateModal={isCreateModal}
      />
    </>
  );
};
