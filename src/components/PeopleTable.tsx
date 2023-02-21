import React from 'react'
import { Table } from 'reactstrap'
import { Person } from '../utils/types'

interface PeopleTableProps {
  people: Person[]
  handlePersonClick: (person: Person) => void
}
const PeopleTable = ({ people, handlePersonClick }: PeopleTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.name} onClick={() => handlePersonClick(person)}>
            <td>{person.name}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default React.memo(PeopleTable)
