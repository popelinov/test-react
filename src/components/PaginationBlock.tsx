import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { TestIdentifiers } from '../utils/constants'
import { getPaginationNumberArray } from '../utils/helpers'

interface PaginationBlockProps {
  page: number
  dataCount: number
  handlePageChange: (page: number) => void
}

const PaginationBlock = ({ page, dataCount, handlePageChange }: PaginationBlockProps) => {
  const pagesCount = Math.ceil(dataCount / 10)

  return (
    <Pagination>
      <PaginationItem disabled={page === 1}>
        <PaginationLink previous onClick={() => handlePageChange(page - 1)} />
      </PaginationItem>
      {getPaginationNumberArray(pagesCount).map((pageNumber) => (
        <PaginationItem
          key={pageNumber}
          active={pageNumber === page}
          data-testid={TestIdentifiers.PAGINATION_BUTTON}
        >
          <PaginationLink
            onClick={() => handlePageChange(pageNumber)}
            data-testid={TestIdentifiers.PAGINATION_LINK}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem data-testid={TestIdentifiers.NEXT_BUTTON} disabled={page === pagesCount}>
        <PaginationLink next onClick={() => handlePageChange(page + 1)} />
      </PaginationItem>
    </Pagination>
  )
}

export default React.memo(PaginationBlock)
