import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { TestIdentifiers } from '../utils/constants'

interface PaginationBlockProps {
  page: number
  dataCount: number
  handlePageChange: (page: number) => void
}

const PaginationBlock = ({ page, dataCount, handlePageChange }: PaginationBlockProps) => {
  return (
    <Pagination>
      <PaginationItem disabled={page === 1}>
        <PaginationLink previous onClick={() => handlePageChange(page - 1)} />
      </PaginationItem>
      {Array.from({ length: dataCount / 10 }, (_, i) => i + 1).map((pageNumber) => (
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
      <PaginationItem data-testid={TestIdentifiers.NEXT_BUTTON} disabled={page === dataCount / 10}>
        <PaginationLink next onClick={() => handlePageChange(page + 1)} />
      </PaginationItem>
    </Pagination>
  )
}

export default React.memo(PaginationBlock)
