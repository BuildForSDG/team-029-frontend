import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const DialogModal = ({ open, payload, closeHandler, acceptHandler, dialog }) => (
  <Modal open={open} onClose={closeHandler} basic size='small'>
    <Header icon='archive' content='Delete road' />
    <Modal.Content>
      <p>
        {dialog}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={closeHandler} basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button onClick={() => acceptHandler(payload.id)} color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default DialogModal;