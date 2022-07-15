import React from 'react'
import { Button, Modal, Image } from 'react-bootstrap'

const ExitModal = props => {
  return (
    <Modal show={props.show} onHide={() => props.handleClose(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='text-center'>
            <Image src="/assets/img/undraw_enter_uhqk.svg" className='w-25' />
            <h4 className='mt-3'>می خواهید خارج شوید؟</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button className="btn col btn-success" onClick={() => props.handleClose(false)}>خیر</Button>
            <Button className="btn col btn-danger" onClick={() => props.setExitResHandler(true)}>بله</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ExitModal