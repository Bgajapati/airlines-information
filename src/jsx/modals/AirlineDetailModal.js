import "../../scss/modals/airline-detail-modal.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/material/Modal";
import AirlineDetailsForms from "../pages/Airlines/forms/details/AirlineDetailsForm";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Fade } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 891,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
};
export const AirlineDetailModal = ({
  isOpen,
  onClose,
  airlineData,
  isLoading,
  isCreateModal,
}) => {
  const { name } = airlineData;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Fade in={isOpen}>
        <Box sx={style} className="airline-detail-modal-container">
          <ModalClose onClick={onClose} />
          {isLoading && <LoadingSpinner />}
          {!isLoading && airlineData && (
            <>
              <div className="airline-detail-modal-heading">
                {isCreateModal ? "Add" : "Edit"} {name} Airline Details
              </div>
              <div className="airline-detail-modal-box">
                <h2 className="airline-detail-modal-box-heading">
                  {name} Airline Details
                </h2>

                <AirlineDetailsForms initialFormData={airlineData} />
              </div>
            </>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};
