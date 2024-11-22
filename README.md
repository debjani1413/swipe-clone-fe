## Swipe Clone 

A frontend application built with React, Redux, and CSS, designed t0 automate the extraction, processing, and
management of invoices data from various file formats.

## Features

- React for building UI components and managing state.
- Redux for centralized state management.
- Fetches data from the backend API and populates tables with dynamic content.
- Responsive Design to ensure smooth performance on all screen sizes.
- Table Views for displaying organized and structured data.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Redux: State management for handling app-level state.
- CSS: Styling for UI components.
- Fetch: For making HTTP requests to the backend.

## Setup

Clone the repository:

```bash
git clone https://github.com/your-username/swipe-clone-fe.git
```

### Install dependencies:

```bash
cd swipe-clone-fe
npm install
``` 

### Run the development server:

```bash
npm start
```

### Open the app in your browser:

```bash
http://localhost:3000
``` 

## Folder Structure

```bash
/src
    /components        - Reusable components (e.g. tables, buttons)
    /redux             - Redux state management (actions, reducers, store)
    /api               - API functions for fetching data from the backend
    /styles            - Custom CSS files for styling
    App.js             - Main component that renders everything
    index.js           - Entry point of the app
```

## Fetching Data

Data is fetched from the backend Google Gemini API to populate the tables. The API responds with the required data in JSON format, which is then processed and displayed in the UI.

## Deployment
The app is hosted on Vercel. You can access the live version here:

[Swipe Clone - Live Demo](https://swipe-clone-fe.vercel.app/)