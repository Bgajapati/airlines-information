import "../../../scss/pages/airlines.scss";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import { AirlinesHeading } from "./heading";
import { List } from "../../components/list";
import { LoadingSpinner } from "../../components/LoadingSpinner";

// Modals
import { AirlineDetailModal } from "../../modals/AirlineDetailModal";
import { AirlineLoginModal } from "../../modals/AirlineLoginModal";

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
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
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
  }, [searchQuery, airlines]);

  const finalList = searchQuery ? airlinesList : airlines;

  useEffect(() => {
    dispatch(getAirlinesList());
  }, [dispatch]);

  const handleListClick = (id) => {
    const payload = { id };
    setIsCreateModal(false);
    dispatch(getAirline(payload));
    setTimeout(() => {
      setDetailModalOpen(true);
    }, 500);
  };
  const handleClose = () => {
    setDetailModalOpen(false);
  };
  const handleSearchAirline = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddAirline = () => {
    setIsCreateModal(true);
    setDetailModalOpen(true);
  };

  const handleLogin = () => {
    setLoginModalOpen(true);
    console.log("Testing Login");
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <main className="airlines-information__main">
        <div className="airlines-information__main-container">
          <AirlinesHeading
            handleSearchAirline={handleSearchAirline}
            handleAddAirline={handleAddAirline}
            handleLogin={handleLogin}
          />
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
            {airlinesLoading === false && finalList.length === 0 && (
              <div className="error-container">
                {" "}
                API server not responding. Please try again
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Airline Detail Modal */}
      <AirlineDetailModal
        isOpen={isDetailModalOpen}
        onClose={handleClose}
        airlineData={isCreateModal ? {} : airline}
        isLoading={airlineLoading}
        isCreateModal={isCreateModal}
      />

      {/* Airline Login Modal */}
      <AirlineLoginModal
        isOpen={isLoginModalOpen}
        onClose={handleLoginModalClose}
      />
    </>
  );
};
