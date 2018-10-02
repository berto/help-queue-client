import React from 'react'
import { Icon, Button, Modal, Header } from 'semantic-ui-react'


const ConfirmationModal = ({ modalOpen, handleClose, handleComplete, id }) => (
  <Modal
    open={modalOpen}
    onClose={handleClose}
    size='small'
  >
    <Header>
      <Icon name='warning circle' color='red' />
      Confirm Completion
          </Header>
    <Modal.Content>
      <h3>Are you sure this question has been completed?</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red' onClick={handleClose} inverted>
        <Icon name='undo' />
        Abort
            </Button>
      <Button color='green' onClick={() => handleComplete(id)} inverted>
        <Icon name='checkmark' />
        Yup
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ConfirmationModal