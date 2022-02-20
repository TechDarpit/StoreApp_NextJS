import { useState } from 'react';

import { Modal } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Notification = (props) => {
  const { title, message, status } = props;
  const [show, setShow] = useState(true);

  const bgClass = `styles.${status}`;

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton className={bgClass}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
    </Modal>
  );
};

export default Notification;
