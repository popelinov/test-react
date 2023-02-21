export const getPaginationNumberArray = (pagesCount: number) =>
  Array.from({ length: pagesCount }, (_, i) => i + 1)
