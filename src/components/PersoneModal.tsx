import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { Person } from '../utils/types'

interface PersoneModalProps {
  isModalOpen: boolean
  handleModalClose: () => void
  selectedPerson: Person | null
}

const PersoneModal = ({ isModalOpen, handleModalClose, selectedPerson }: PersoneModalProps) => {
  if (!selectedPerson) {
    return null
  }

  const tableStructure = [
    { title: 'Name', value: selectedPerson.name },
    { title: 'Height', value: selectedPerson.height },
    { title: 'Mass', value: selectedPerson.mass },
    { title: 'Gender', value: selectedPerson.gender },
  ]

  return (
    <Modal isOpen={isModalOpen} toggle={handleModalClose}>
      <ModalHeader toggle={handleModalClose}>User Info</ModalHeader>
      <ModalBody>
        <div>
          {tableStructure.map(({ title, value }) => (
            <p key={title}>
              <strong>{title}:</strong> {value}
            </p>
          ))}
        </div>
      </ModalBody>
    </Modal>
  )
}

export default React.memo(PersoneModal)
