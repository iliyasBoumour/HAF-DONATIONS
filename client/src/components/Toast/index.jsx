import React, { useState } from "react";
import { Toast } from "react-bootstrap";

const MyToast = ({ title, msg }) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(false);
  return (
    <Toast show={show} onClose={toggleShow}>
      <Toast.Header>
        <strong className="mr-auto">{title || "Error"}</strong>
      </Toast.Header>
      <Toast.Body>{msg}</Toast.Body>
    </Toast>
  );
};

export default MyToast;
