import React, { useState } from 'react'
import { Card, CardHeader, CardBody, Container } from 'reactstrap'
import { useQuery } from 'react-query'
import { PeopleResponse, Person } from '../utils/types'
import { fetchPeople } from '../utils/requests'
import { PeopleTable, PaginationBlock, PersoneModal } from '../components'

const MainTable = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { isLoading, isError, data } = useQuery<PeopleResponse>(['people', page], () =>
    fetchPeople(page),
  )

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setSelectedPerson(null)
    setIsModalOpen(false)
  }

  return (
    <Card>
      <CardHeader>People</CardHeader>
      <CardBody>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {data && (
          <Container>
            <PeopleTable people={data.results} handlePersonClick={handlePersonClick} />
            <PaginationBlock
              dataCount={data.count}
              page={page}
              handlePageChange={handlePageChange}
            />
            <PersoneModal
              isModalOpen={isModalOpen}
              handleModalClose={handleModalClose}
              selectedPerson={selectedPerson}
            />
          </Container>
        )}
      </CardBody>
    </Card>
  )
}

export default React.memo(MainTable)
