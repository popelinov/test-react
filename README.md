### Description

This repository contains a simple React application that displays a list of users and allows the user to view their details. The project is built using React, React-query, and React-Bootstrap.

## Features

- Displays data in chunks of 10, with pagination controls at the bottom
- Displays the current page and disables the "previous" button when on the first page or "next" button when on the last page
- Allows for changing the current page by clicking the pagination links
- Written in TypeScript

## Installation

To run this project, you need to have Node.js and Git installed on your machine.

Clone this repository by running the following command:

```
    git clone https://github.com/popelinov/test-react.git
```

Navigate to the repository directory in your terminal:

```
    cd test-react
```

Install the dependencies using yarn:

```
    yarn install
```

Start the development server:

```
    yarn start
```

The application should now be available at http://localhost:3000.

## Testing

This repository includes a simple unit test for the PaginationBlock component using @testing-library/react. To run the tests, use the following command:

```
yarn test
```
