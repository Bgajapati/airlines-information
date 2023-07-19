import "../../scss/modals/airline-login-modal.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import ModalClose from "@mui/joy/ModalClose";
import Modal from "@mui/material/Modal";

import { Fade } from "@mui/material";
import AirlineLoginForms from "../pages/Airlines/forms/login/AirlineLoginForm";

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
export const AirlineLoginModal = ({ isOpen, onClose }) => {
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
          <div className="airline-login-modal-heading">Edit Login Details</div>
          <div className="airline-login-modal-box">
            <h2 className="airline-login-modal-box-heading">Login Details</h2>
            <AirlineLoginForms />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
