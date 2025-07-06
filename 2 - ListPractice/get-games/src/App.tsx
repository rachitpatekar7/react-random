/*import ListGroup from "./components/ListGroup"

function App()
{
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']} heading="Cities" onSelectItem={handleSelectItem} />
    <ListGroup items={['Action', 'Adventure', 'Puzzle', 'RPG']} heading="Genres" onSelectItem={handleSelectItem} />
    <ListGroup items={['PC', 'PlayStation', 'Xbox', 'Nintendo']} heading="Platforms" onSelectItem={handleSelectItem} />
    <ListGroup items={[]} heading="Empty List" onSelectItem={handleSelectItem} />
    <ListGroup items={['Apple', 'Banana', 'Cherry']} heading="Fruits" onSelectItem={handleSelectItem} />
  </div>
}

export default App;
// The App component is the root component of the application*/
import React from 'react'
import Alert from './components/Alert'
// The App component is the root component of the application
// It renders the Alert component inside a div
function App() {
  return (
    <div>
      <Alert>
        This is <h1>AYOAYOAYAOAYO</h1>an alert message!
      </Alert>
      </div>
  )
}
//react developer tools is a browser extension that allows you to inspect and debug React applications
// It provides a way to view the component hierarchy, props, state, and other information about the React application
// It also allows you to edit the props and state of components in real-time
// This can be useful for debugging and testing React applications
export default App;