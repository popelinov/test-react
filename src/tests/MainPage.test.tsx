import React from 'react'
import { render, screen } from '@testing-library/react'
import { PeopleTable } from '../components'
import { Person } from '../utils/types'

const mockData: Person[] = [
  {
    name: 'Den',
    height: '193cm',
    mass: '100kg',
    gender: 'male',
    homeworld: 'test',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '06.08.1997',
    edited: '06.08.2010',
    url: 'http//test',
  },
  {
    name: 'Bogdan',
    height: '193cm',
    mass: '100kg',
    gender: 'male',
    homeworld: 'test',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '06.08.1997',
    edited: '06.08.2010',
    url: 'http//test',
  },
  {
    name: 'Oleg',
    height: '193cm',
    mass: '100kg',
    gender: 'male',
    homeworld: 'test',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '06.08.1997',
    edited: '06.08.2010',
    url: 'http//test',
  },
]

const mockFunc = () => console.log()

describe('MainTable', () => {
  it('renders table headers and data correctly', () => {
    render(<PeopleTable handlePersonClick={mockFunc} people={mockData} />)

    // Check table headers
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Height')).toBeInTheDocument()
    expect(screen.getByText('Mass')).toBeInTheDocument()
    expect(screen.getByText('Gender')).toBeInTheDocument()

    // Check initial table data
    expect(screen.getByText('Den')).toBeInTheDocument()
    expect(screen.getByText('Bogdan')).toBeInTheDocument()
    expect(screen.getByText('Oleg')).toBeInTheDocument()
    expect(screen.getByText('193cm')).toBeInTheDocument()
    expect(screen.getByText('100kg')).toBeInTheDocument()
    expect(screen.getByText('male')).toBeInTheDocument()

    // Click next button
    const nextButton = screen.getByText('Next')
    nextButton.click()

    // Check next page table data
    expect(screen.queryByText('1')).not.toBeInTheDocument()
    expect(screen.queryByText('Alice')).not.toBeInTheDocument()
    expect(screen.queryByText('25')).not.toBeInTheDocument()
    expect(screen.queryByText('2')).not.toBeInTheDocument()
    expect(screen.queryByText('Bob')).not.toBeInTheDocument()
    expect(screen.queryByText('30')).not.toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Charlie')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()

    // Click previous button
    const previousButton = screen.getByText('Previous')
    previousButton.click()

    // Check previous page table data
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('25')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.queryByText('3')).not.toBeInTheDocument()
    expect(screen.queryByText('Charlie')).not.toBeInTheDocument()
    expect(screen.queryByText('35')).not.toBeInTheDocument()
  })
})
