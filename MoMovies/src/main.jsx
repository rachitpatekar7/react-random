import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//React app beigins here
// This is the entry point of the React application, where the App component is rendered into the root element of the HTML document.
// The StrictMode is used to highlight potential problems in an application,
// such as deprecated APIs or unexpected side effects, helping developers write better React code.
// The createRoot function from 'react-dom/client' is used to create a root for the React application,
// allowing for concurrent features and improved performance in React 18 and later versions.
// The './index.css' file is imported to apply global styles to the application.
// The App component, which is the main component of the application, is imported from './App.jsx' and rendered inside the StrictMode wrapper.
// This setup ensures that the application is ready to be displayed in the browser, with all necessary styles and components in place.
// The use of StrictMode is particularly beneficial during development, as it helps identify potential issues early on,
// making the application more robust and maintainable in the long run.
// Overall, this code snippet serves as the foundation for a React application, setting up the environment and rendering the main component to the DOM.
// It is a common practice in React development to structure applications in this way, ensuring a clean and efficient entry point for the application.
