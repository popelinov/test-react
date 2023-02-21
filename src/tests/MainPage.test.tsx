import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { PaginationBlock } from '../components'
import { TestIdentifiers } from '../utils/constants'

describe('PaginationBlock', () => {
  const dataCount = 25

  it('should render the correct number of pages', () => {
    render(<PaginationBlock page={1} dataCount={dataCount} handlePageChange={() => {}} />)
    const pageLinks = screen.getAllByTestId(TestIdentifiers.PAGINATION_BUTTON)
    expect(pageLinks).toHaveLength(2)
  })

  it('should call handlePageChange when a page link is clicked', () => {
    const handlePageChangeMock = jest.fn()
    render(
      <PaginationBlock page={1} dataCount={dataCount} handlePageChange={handlePageChangeMock} />,
    )
    const page2Link = screen.getAllByTestId(TestIdentifiers.PAGINATION_LINK)
    fireEvent.click(page2Link[0])
    expect(handlePageChangeMock).toHaveBeenCalled()
  })

  it('should not render any pages if there is only one page of data', () => {
    render(<PaginationBlock page={1} dataCount={10} handlePageChange={() => {}} />)
    const pageLinks = screen.queryAllByRole('listitem', { name: /page \d/i })
    expect(pageLinks).toHaveLength(0)
  })
})
