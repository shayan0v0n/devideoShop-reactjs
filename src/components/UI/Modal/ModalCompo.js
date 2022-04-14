import React from 'react';
import {Modal, Image} from "react-bootstrap"
import './ModalCompo.scss'

const ModalCompo = props => {
    return (
        <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="text-center">
              <Image src="/assets/img/undraw_login_re_4vu2.svg" fluid className="w-50 mb-3" />
              <h5>{props.children}</h5>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default ModalCompo;