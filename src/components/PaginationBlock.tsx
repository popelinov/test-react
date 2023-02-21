import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

interface PaginationBlockProps {
  page: number
  dataCount: number
  handlePageChange: (page: number) => void
}

const PaginationBlock = ({
  page,
  dataCount,
  handlePageChange,
}: PaginationBlockProps): JSX.Element => {
  return (
    <Pagination>
      <PaginationItem disabled={page === 1}>
        <PaginationLink previous onClick={() => handlePageChange(page - 1)} />
      </PaginationItem>
      {Array.from({ length: dataCount / 10 }, (_, i) => i + 1).map((p) => (
        <PaginationItem key={p} active={p === page}>
          <PaginationLink onClick={() => handlePageChange(p)}>{p}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={page === dataCount / 10}>
        <PaginationLink next onClick={() => handlePageChange(page + 1)} />
      </PaginationItem>
    </Pagination>
  )
}

export default React.memo(PaginationBlock)
