import React, { useState } from "react";
import { Modal } from "react-bootstrap";


import "../Assets/CSS/modal.scss";

const TOS = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
            <span role="button" className="footer-text mx-3" onClick={handleShow}>
              Terms of service
            </span>
      <Modal className="bg-modal-1" show={show} onHide={handleClose} centered>
          <div className="about_modal-cards mt-2">
    <div className="section">
          <div className="container dropshadow modal-card-2">
    <div className="columns">
      <div className="column is-4 is-offset-4">
        <div className="modal-card">
        <div className="header text-center mt-5">
            <div className="avatar text-center svg-icon svg-icon-lg text-purple">
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="map-marker-question" className="svg-inline--fa fa-map-marker-question fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0 0 38.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 352a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm26.67-113.27v1.43A15.84 15.84 0 0 1 202.83 256h-16.32a15.84 15.84 0 0 1-15.84-15.84V224A24.09 24.09 0 0 1 184 202.5c30.61-15.31 50.67-26.54 50.67-42.5 0-19.39-14-40-40-40a40.06 40.06 0 0 0-38.2 28.12C154.32 155 148.36 160 141.14 160H124.3a15.92 15.92 0 0 1-15.44-19.55A88.14 88.14 0 0 1 194.67 72c55.08 0 88 44.75 88 88 0 41-32.75 62.47-64 78.73z" opacity="0.4"></path><path className="fa-primary" fill="currentColor" d="M192 288a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm2.67-216a88.14 88.14 0 0 0-85.81 68.45A15.92 15.92 0 0 0 124.3 160h16.84c7.22 0 13.18-5 15.33-11.88a40.06 40.06 0 0 1 38.2-28.12c26 0 40 20.61 40 40 0 16-20.06 27.19-50.67 42.5a24.09 24.09 0 0 0-13.33 21.5v16.16A15.84 15.84 0 0 0 186.51 256h16.32a15.84 15.84 0 0 0 15.84-15.84v-1.43c31.25-16.26 64-37.78 64-78.73 0-43.25-32.92-88-88-88z"></path></g></svg>
            </div>
          </div>
          <div className="modal-card-body">
            <div name="termly-embed" data-id="2fe64fd2-7fee-4b24-9109-2b43f74b70aa" data-type="iframe"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
          </Modal>
          </>
  );
};
export default TOS;
