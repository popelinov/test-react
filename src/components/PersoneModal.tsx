import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Person } from '../utils/types'

interface PersoneModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
  selectedPerson: Person | null
}

const PersoneModal = ({
  isModalOpen,
  handleModalClose,
  selectedPerson,
}: PersoneModalProps): JSX.Element => {
  return (
    <Modal isOpen={isModalOpen} toggle={handleModalClose}>
      <ModalHeader toggle={handleModalClose}>User Info</ModalHeader>
      <ModalBody>
        {selectedPerson && (
          <div>
            <p>
              <strong>Name:</strong> {selectedPerson.name}
            </p>
            <p>
              <strong>Height:</strong> {selectedPerson.height}
            </p>
            <p>
              <strong>Mass:</strong> {selectedPerson.mass}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPerson.gender}
            </p>
          </div>
        )}
      </ModalBody>
    </Modal>
  )
}

export default React.memo(PersoneModal)
