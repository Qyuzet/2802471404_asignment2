# Group 2 - Simple Project Webpage

This project is a sample webpage created using React and Vite, showcasing a team of developers with individual profile pages.

## Reasons for Using React

1. **Component-Based Architecture**: React allows developers to build encapsulated components that manage their own state. This makes it easier to reuse code and manage complex UIs.

2. **Virtual DOM**: React uses a virtual DOM to optimize rendering. This means that updates to the UI are efficient and fast, as React only re-renders components that have changed.

3. **Declarative UI**: React's declarative approach makes it easier to understand how the UI should look at any given point in time. This leads to more predictable and easier-to-debug code.

4. **Ecosystem and Community**: React has a large ecosystem of libraries and tools, making it easier to find solutions and support for various challenges. The community is active and continuously contributes to its growth.

5. **State Management**: React provides built-in hooks like `useState` and `useEffect` for managing state and side effects, making it easier to handle dynamic data in applications.

6. **SEO Friendly**: With the help of frameworks like Next.js, React applications can be made SEO-friendly, which is crucial for web applications.

## Project Structure

- **src/**: Contains all the source code for the project.
  - **components/**: Contains React components used in the project.
    - **Navbar.jsx**: The navigation bar component with animated menu.
    - **Homepage.jsx**: The main landing page component displaying team members.
    - **ProfilePage.jsx**: The individual profile page component for each team member.
    - **RatingSystem.jsx**: The component for the dynamic rating system.
  - **styles/**: Contains all the CSS files for styling the components.
    - **Navbar.css**: Styles for the Navbar component.
    - **Homepage.css**: Styles for the Homepage component.
    - **ProfilePage.css**: Styles for the ProfilePage component.
    - **RatingSystem.css**: Styles for the RatingSystem component.
  - **App.jsx**: The main application component that integrates all other components.
  - **App.css**: Global styles for the application.
  - **index.css**: Additional styles and resets for the application.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that provides a fast development environment.
- **CSS**: Used for styling the components and layout.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Additional Information

This project includes a responsive design, animated menu, and a dynamic rating system for team members. Each team member has a profile page that displays their skills, bio, and projects.
